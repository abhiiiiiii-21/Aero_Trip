
const ContactForm = () => {
    return (
        <div>
            <div className="w-[400px] bg-white rounded-2xl shadow-md p-6 border border-gray-300 mt-20">

                <h2 className="text-xl font-bold mb-6 text-center">Get in Touch</h2>

                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">Name</label>
                    <input type="text" className="w-full px-3 py-2 bg-blue-100 border border-gray-300 rounded" placeholder="Enter your name" />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">Email</label>
                    <input type="email" className="w-full px-3 py-2 bg-blue-100 border border-gray-300 rounded" placeholder="Enter your email" />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">Subject</label>
                    <input type="text" className="w-full px-3 py-2 bg-blue-100 border border-gray-300 rounded" placeholder="Subject" />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 font-medium text-gray-700">Message</label>
                    <textarea rows="4" className="w-full px-3 py-2 bg-blue-100 border border-gray-300 rounded resize-none" placeholder="Write your message"></textarea>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">
                    Send Message
                </button>
            </div>
        </div>
    )
}

export default ContactForm
