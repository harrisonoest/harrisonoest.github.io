import { useState, FormEvent } from "react";
import { ContentColumn } from "../molecules/ContentColumn";
import "./Contact.css";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <ContentColumn>
        <h1>Get In Touch</h1>
        <p>Have a question or want to work together? Feel free to reach out!</p>
      </ContentColumn>

      <ContentColumn>
        <div className="contact-info">
          <a href="mailto:harrison.oest@gmail.com" className="contact-card">
            <span className="contact-icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p>harrison.oest@gmail.com</p>
            </div>
          </a>
          <a href="https://github.com/harrisonoest" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon">💻</span>
            <div>
              <strong>GitHub</strong>
              <p>github.com/harrisonoest</p>
            </div>
          </a>
          <a href="https://linkedin.com/in/harrisonoest" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon">💼</span>
            <div>
              <strong>LinkedIn</strong>
              <p>linkedin.com/in/harrisonoest</p>
            </div>
          </a>
        </div>

        <div className="contact-form-container">
          <h2>Send Me a Message</h2>

          {submitted && (
            <div className="success-message">
              ✓ Thank you for your message. I'll get back to you as soon as possible.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="What is this regarding?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message here..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </ContentColumn>
    </div>
  );
}
