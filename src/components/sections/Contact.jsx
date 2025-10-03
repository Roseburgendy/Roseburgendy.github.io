import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
     <section id="contact" className="section section-pad">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-xl">
          <h2 className="section-title">Get In Touch</h2>

          {/* 卡片容器（浅色） */}
          <div className="card card-lg card-hover">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  defaultValue={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="
                    w-full rounded-md border border-gray-300 bg-white
                    px-4 py-3 text-gray-900 placeholder:text-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600
                    transition
                  "
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  defaultValue={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="
                    w-full rounded-md border border-gray-300 bg-white
                    px-4 py-3 text-gray-900 placeholder:text-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600
                    transition
                  "
                  placeholder="example@gmail.com"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  defaultValue={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="
                    w-full rounded-md border border-gray-300 bg-white
                    px-4 py-3 text-gray-900 placeholder:text-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600
                    transition
                  "
                  placeholder="Your message..."
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>

              {/* 次要说明文本（浅色 muted） */}
              <p className="muted text-sm text-center">
                I usually reply within 1–2 business days.
              </p>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
