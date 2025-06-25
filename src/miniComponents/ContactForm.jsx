import SendButton from "./Send";

const ContactForm = () => {
    return (
        <div className="flex justify-center px-4 py-10">
            <div className="w-full max-w-2xl bg-white rounded-2xl p-8 shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>

                <div className="flex flex-wrap gap-4">
                    <div className="w-full md:w-[48%]">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Abhishek Patel"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="w-full md:w-[48%]">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="abhi2004@gmail.com"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                        className="w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option>Select a subject</option>
                        <option>Flight Information</option>
                        <option>Booking Issues</option>
                        <option>Feedback</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        rows="4"
                        placeholder="How can we help you?"
                        className="w-full border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div className="mt-6">
                    <SendButton/>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
