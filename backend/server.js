require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";
const NODE_ENV = process.env.NODE_ENV || "development";

// Middleware
app.use(
  cors({
    origin:
      CORS_ORIGIN === "*"
        ? true
        : CORS_ORIGIN.split(",")
            .map((s) => s.trim())
            .filter(Boolean),
    methods: ["POST", "OPTIONS"],
  })
);
app.use(express.json());

// Serve frontend static files
const frontendDir = path.resolve(__dirname, "..");
app.use(express.static(frontendDir));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "portfolio-contact-api" });
});

function isValidEmail(email) {
  return /.+@.+\..+/.test(String(email || "").toLowerCase());
}

function validateContactPayload(body) {
  const errors = {};

  if (!body.fullName || String(body.fullName).trim().length < 2) {
    errors.fullName = "Full Name is required.";
  }
  if (!body.email || !isValidEmail(body.email)) {
    errors.email = "Valid Email is required.";
  }
  if (!body.subject || String(body.subject).trim().length < 2) {
    errors.subject = "Subject is required.";
  }
  if (!body.message || String(body.message).trim().length < 5) {
    errors.message = "Message is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

function buildTransport() {
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;
  if (!user || !pass) {
    throw new Error(
      "Missing MAIL_USER or MAIL_PASS. Set them in your .env file."
    );
  }

  // Allow overriding SMTP server via env
  const host = process.env.MAIL_HOST;
  const port = process.env.MAIL_PORT && Number(process.env.MAIL_PORT);
  const secureEnv = (process.env.MAIL_SECURE || "").toLowerCase();
  const secure = secureEnv === "true" || secureEnv === "1";

  if (host && port) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  }

  // Default to Gmail service
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, mobile, subject, message } = req.body || {};
    const { isValid, errors } = validateContactPayload({
      fullName,
      email,
      mobile,
      subject,
      message,
    });

    if (!isValid) {
      return res.status(400).json({ success: false, errors });
    }

    let transporter;
    try {
      transporter = buildTransport();
      await transporter.verify();
    } catch (e) {
      console.error("Mailer verify/build failed:", e);
      const payload = { success: false, error: "Email configuration error." };
      if (NODE_ENV !== "production") {
        payload.detail = e && e.message ? e.message : String(e);
      }
      return res.status(500).json(payload);
    }

    const toAddress = process.env.MAIL_TO || process.env.MAIL_USER;
    const fromAddress = process.env.MAIL_FROM || process.env.MAIL_USER;
    const mail = {
      from: `Portfolio Contact <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text:
        `You have a new contact message from your portfolio website.\n\n` +
        `Full Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Mobile: ${mobile || "N/A"}\n` +
        `Subject: ${subject}\n` +
        `Message:\n${message}\n`,
      html: `
				<h2>New Portfolio Contact</h2>
				<p><strong>Full Name:</strong> ${fullName}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Mobile:</strong> ${mobile || "N/A"}</p>
				<p><strong>Subject:</strong> ${subject}</p>
				<p><strong>Message:</strong></p>
				<p style="white-space: pre-line">${message}</p>
			`,
    };

    try {
      await transporter.sendMail(mail);
    } catch (e) {
      console.error("sendMail failed:", e);
      const payload = { success: false, error: "Failed to send message." };
      if (NODE_ENV !== "production") {
        payload.detail = e && e.message ? e.message : String(e);
      }
      return res.status(500).json(payload);
    }

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    const payload = { success: false, error: "Failed to send message." };
    if (NODE_ENV !== "production") {
      payload.detail = error && error.message ? error.message : String(error);
    }
    return res.status(500).json(payload);
  }
});

// Email configuration diagnostics (development helper)
app.get("/api/email-verify", async (req, res) => {
  try {
    const tr = buildTransport();
    await tr.verify();
    return res.json({ ok: true, user: process.env.MAIL_USER || null });
  } catch (e) {
    const payload = { ok: false, error: "Email configuration error." };
    if (NODE_ENV !== "production") {
      payload.detail = e && e.message ? e.message : String(e);
    }
    return res.status(500).json(payload);
  }
});

// Root route serves index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`);
  // Auto-open browser to the site (use dynamic import for ESM-only 'open')
  (async () => {
    try {
      const mod = await import("open");
      const open = mod && (mod.default || mod);
      if (typeof open === "function") {
        open(`http://localhost:${PORT}`).catch(() => {});
      }
    } catch (_) {
      // ignore if open is not available
    }
  })();
});
