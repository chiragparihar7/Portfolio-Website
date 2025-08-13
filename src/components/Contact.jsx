import react from "react";

import emailjs from "emailjs-com";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        e.target,
        "YOUR_USER_ID" // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset(); // clear the form
        },
        (error) => {
          alert("Error sending message. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="relative bg-gray-950 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 mb-8">
            I’m open to freelance projects or full-time opportunities. Send me a
            message and I’ll respond as soon as possible.
          </p>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full text-purple-500">
                📧
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>chiragparihar118@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full text-pink-500">
                📞
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 1234567890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full text-orange-400">
                📍
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-12 rounded-3xl shadow-xl space-y-6"
        >
          <h3 className="text-2xl font-bold mb-4">Send a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
