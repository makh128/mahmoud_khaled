# mahmoud_khaled

Mahmoud Khaled portfolio

## Backend: Contact API (Node.js + Express + Nodemailer)

This project includes a minimal backend to handle the contact form via a POST endpoint, validate fields, send an email using Gmail via Nodemailer, and return JSON responses.

### 1) Directory

Backend files are under `backend/`:

- `backend/server.js`: Express server with `/api/contact` endpoint
- `backend/package.json`: Dependencies and scripts

Create your own `.env` file in `backend/` (see below).

### 2) Install and run

```bash
cd backend
npm install
npm run dev
```

Server runs at `http://localhost:3001` by default.

### 3) Environment variables (.env)

Create `backend/.env` with:

```bash
PORT=3001

# Allow your site origins (comma-separated). Use * only in development.
CORS_ORIGIN=http://localhost:3000,http://127.0.0.1:3000

# Gmail SMTP (recommend enabling 2FA and creating an App Password)
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password_here

# Optional: by default it sends to MAIL_USER
MAIL_TO=mahmoud.mk507@gmail.com
```

Notes for Gmail:

- Enable 2‑Step Verification on your Google account.
- Create an App Password (select Mail + your device) and use it as `MAIL_PASS`.
- Standard password will not work; Less Secure Apps is deprecated.

### 4) Endpoint

`POST /api/contact`

JSON body:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "mobile": "+1-555-1234",
  "subject": "Project inquiry",
  "message": "Hello Mahmoud, I'd like to talk about a project."
}
```

Responses:

```json
// 200
{ "success": true, "message": "Message sent successfully." }

// 400 (validation)
{ "success": false, "errors": { "email": "Valid Email is required." } }

// 500 (server)
{ "success": false, "error": "Failed to send message." }
```

### 5) Frontend integration (vanilla JS fetch)

Add this to your existing form script. Replace selectors/IDs as needed.

```html
<!-- Example form fields -->
<form id="contact-form">
  <input id="fullName" name="fullName" required />
  <input id="email" name="email" type="email" required />
  <input id="mobile" name="mobile" />
  <input id="subject" name="subject" required />
  <textarea id="message" name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

```js
// Frontend JS (vanilla)
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    fullName: document.getElementById("fullName").value.trim(),
    email: document.getElementById("email").value.trim(),
    mobile: document.getElementById("mobile").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  try {
    const res = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      alert("Your message has been sent. Thank you!");
      form.reset();
    } else if (res.status === 400) {
      const messages = Object.values(data.errors || {}).join("\n");
      alert(messages || "Please check your inputs.");
    } else {
      alert(data.error || "Failed to send message. Please try again later.");
    }
  } catch (err) {
    alert("Network error. Please try again later.");
  }
});
```

### 6) Deploy notes

- Set environment variables on your server/host (never commit `.env`).
- Update `CORS_ORIGIN` to your production domain.
- Keep the backend port open or place it behind your web server/proxy.
