import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { question: "How do I track a flight?", answer: "Enter the flight number or destination in the search bar on our home page or flight search page. You can track flights by airline code and flight number (e.g., AA1234) or search by destination airport to see all flights to that location." },
  { question: "How accurate is the flight information?", answer: "Our data is updated in real-time from reliable aviation sources to ensure accuracy." },
  { question: "Do I need to create an account to track flights?", answer: "No, you can track flights without an account. However, creating one allows you to save preferences." },
  { question: "Can I get notifications about flight status changes?", answer: "Yes, you can enable notifications to receive updates about delays, departures, or arrivals." },
  { question: "Does SkyTrack work for international flights?", answer: "Yes, SkyTrack supports both domestic and international flights globally." },
  { question: "Is there a mobile app available?", answer: "Yes, SkyTrack is available on both Android and iOS platforms." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-4 text-left bg-white hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            <div
              className={`px-4 text-sm text-gray-700 transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 py-2" : "max-h-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
