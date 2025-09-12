import { useState } from "react";

interface ContactForm {
  fullName: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [popup, setPopup] = useState(false);
  const allFilled = Object.values(form).every((v) => v.trim());
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!allFilled) return;
    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data && data.success) {
        setPopup(true);
        setForm({
          fullName: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else if (res.status === 400 && data && data.errors) {
        alert(
          Object.values(data.errors).join("\n") || "Please check your inputs."
        );
      } else {
        alert((data && data.error) || "Failed to send message.");
      }
    } catch {
      alert("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        Contact <span>Me!</span>
        <span className="animate scroll" style={{ ["--i" as any]: 1 }}></span>
      </h1>
      <div className="contact-data">
        <div className="contact-animation"></div>
        <div className="my-contact-data">
          <div className="address">
            <span className="year">
              Email :{" "}
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 1 }}
              ></span>
            </span>
            <a href="mailto:mahmoud.mk507@gmail.com" className="title">
              mahmoud.mk507@gmail.com
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 1 }}
              ></span>
            </a>
          </div>
          <div className="address">
            <p className="year">
              Phone :
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 1 }}
              ></span>
            </p>
            <p className="title">
              (+020) 106 903 0957
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 1 }}
              ></span>
            </p>
          </div>
          <div className="address">
            <p className="year">
              Address :
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 1 }}
              ></span>
            </p>
            <p className="title">
              Fayoum - Cairo - Egypt
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 1 }}
              ></span>
            </p>
          </div>
          <div className="address">
            <p className="year">
              LinkedIn :
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 1 }}
              ></span>
            </p>
            <a
              href="https://www.linkedin.com/in/mahmoud-khaled128"
              className="title link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mahmoud Khaled
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 1 }}
              ></span>
            </a>
          </div>
          <div className="address">
            <p className="year">
              Github :
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 1 }}
              ></span>
            </p>
            <a
              href="https://github.com/makh128"
              className="title link"
              target="_blank"
            >
              makh128
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 1 }}
              ></span>
            </a>
          </div>
        </div>
        <form id="contact-form" onSubmit={onSubmit}>
          <div className="input-box">
            <div className="input-field">
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                required
                value={form.fullName}
                onChange={onChange}
              />
              <span className="focus"></span>
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 2 }}
              ></span>
            </div>
            <div className="input-field">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={onChange}
              />
              <span className="focus"></span>
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 3 }}
              ></span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input
                id="mobile"
                name="mobile"
                type="text"
                inputMode="numeric"
                placeholder="Mobile Number"
                required
                value={form.mobile}
                onChange={onChange}
              />
              <span className="focus"></span>
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 4 }}
              ></span>
            </div>
            <div className="input-field">
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Email Subject"
                required
                value={form.subject}
                onChange={onChange}
              />
              <span className="focus"></span>
              <span
                className="animate scroll"
                style={{ ["--i" as any]: 5 }}
              ></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              id="message"
              name="message"
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
              value={form.message}
              onChange={onChange}
            ></textarea>
            <span className="focus"></span>
            <span
              className="animate scroll"
              style={{ ["--i" as any]: 6 }}
            ></span>
          </div>
          <div className="btn-box btns">
            <button
              id="submitBtn"
              type="submit"
              className="btn submit"
              disabled={!allFilled || submitting}
            >
              {submitting ? "Sending..." : "Submit"}
            </button>
            <span
              className="animate scroll"
              style={{ ["--i" as any]: 7 }}
            ></span>
          </div>
          <div className={`popup-container ${popup ? "open-popup" : ""}`}>
            <div className="popup-content">
              <h3>Thank You!</h3>
              <p>Your details has been successfully submitted. Thanks!</p>
              <button
                className="popup-btn"
                type="button"
                onClick={() => setPopup(false)}
              >
                Ok
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
