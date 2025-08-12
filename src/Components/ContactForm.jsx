import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3543f72",
        "template_jb6hzyk",
        form.current,
        "Pplboz6hjVaqTHZ6q"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        required
        className="border p-2 w-full"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="border p-2 w-full"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
