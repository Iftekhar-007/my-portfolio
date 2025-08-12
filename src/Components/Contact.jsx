import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://portfolio-server-rose-three.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl  text-black font-bold fontcormorand mb-4">
        Contact With Me
      </h2>
      <div className="flex justify-center items-center">
        <div className="bg-gradient-to-r from-gray-100 to-base-200 shadow-sm rounded-2xl p-6">
          {/* Header */}

          {/* Two column layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-3 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-3 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="border p-3 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
              <button
                type="submit"
                className=" text-white px-5 py-2 fontcormorand w-full bg-black rounded-md text-[20px] hover:bg-transparent hover:border-2 hover:border-black hover:text-black transition"
              >
                Send Email Directly
              </button>
              <p className="text-sm text-gray-600">{status}</p>
            </form>

            {/* Right side - Contact Info */}
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-lg">
                <span className="font-semibold">📧 Email:</span>{" "}
                shawonsp534@gmail.com
              </p>
              <p className="text-lg">
                <span className="font-semibold">📞 Contact:</span>
                +8801615998954
              </p>
              <p className="text-lg">
                <span className="font-semibold">💬 WhatsApp:</span>
                +8801615998954
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
