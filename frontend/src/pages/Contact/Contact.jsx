import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          Have a question or need assistance? We’re here to help. Reach out to us and we’ll get back to you as soon as possible.
        </p>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> support@foodieexpress.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 123 Foodie Street, Culinary City, FC 45678</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
