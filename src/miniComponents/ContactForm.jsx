import { useState } from "react";
import SendButton from "./Send";

const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <div className="w-full max-w-3xl px-2 sm:px-4 relative">

      {showPopup && (
        <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 transition-opacity duration-300">
          ✅ Your message has been sent!
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="group bg-white border border-gray-200 rounded-2xl p-4 sm:p-8 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400 cursor-pointer">

          <h2 className="text-3xl font-semibold text-gray-800 mb-6 group-hover:text-[#1DA1F1] transition-colors duration-300">
            Get in Touch
          </h2>

          <div className="flex flex-wrap gap-4">

            <div className="w-full md:w-[48%]">

              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>

              <input type="text" name="from_name" placeholder="Enter your Full name" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" required/>
            </div>

            <div className="w-full md:w-[48%]">

              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>

              <input type="email" name="user_email" placeholder="Enter your Email ID" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" required/>
            </div>
          </div>

          <div className="mt-4">

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select name="subject" className="w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" required>

              <option value="">Select a subject</option>
              <option value="Flight Information">Flight Information</option>
              <option value="Booking Issues">Booking Issues</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>

            </select>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea name="message" rows="4" placeholder="How can we help you?" className="w-full border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" required></textarea>
          </div>

          <div className="mt-6">
            <SendButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
