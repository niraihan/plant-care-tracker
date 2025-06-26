import React from "react";
import useTitle from "../hook/useTitle";

const ContactPage = () => {
  useTitle("PlantCare | Contact");

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-green-500">Get in Touch</h2>
          <p className="text-gray-700">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <div className="text-gray-600 space-y-2">
            <p><strong>📧 Email:</strong> support@plantcare.com</p>
            <p><strong>📞 Phone:</strong> +880 1234 567890</p>
            <p><strong>🏠 Address:</strong> Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-white shadow-lg p-6 rounded-lg border">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input type="text" className="input input-bordered w-full" placeholder="Your Name" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input type="email" className="input input-bordered w-full" placeholder="Your Email" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea className="textarea textarea-bordered w-full" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-success w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
