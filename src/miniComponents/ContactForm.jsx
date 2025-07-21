import React from "react";
import emailjs from "emailjs-com";
import SendButton from "./Send";

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            alert("Message sent successfully!");
            e.target.reset();
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Something went wrong. Please try again later.");
        });
    };

    return (
        <div className="w-full max-w-3xl">
            <form onSubmit={sendEmail}>
                <div className="bg-white rounded-2xl p-8 shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>

                    {/* Hidden receiver name */}
                    <input type="hidden" name="to_name" value="Team Nexus" />

                    <div className="flex flex-wrap gap-4">
                        <div className="w-full md:w-[48%]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Enter your Full name"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="w-full md:w-[48%]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Enter your Email ID"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <select
                            name="subject"
                            className="w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            required
                        >
                            <option value="">Select a subject</option>
                            <option value="Flight Information">Flight Information</option>
                            <option value="Booking Issues">Booking Issues</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="How can we help you?"
                            className="w-full border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            required
                        ></textarea>
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
