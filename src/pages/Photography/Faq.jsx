import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to manage active FAQ item

  const faqItems = [
    {
      question: "What are the payment terms?",
      answer:
        "Booking amount is 30%, and the total 70% payment will have to be done by the end of the program. The remaining 30% will be paid at the time of delivery.",
    },
    {
      question: "Who bears the traveling and lodging expenses?",
      answer: "Traveling and lodging facilities will be borne by the client.",
    },
    {
      question: "How will the soft copies be provided?",
      answer:
        "All soft copies (RAW photos and RAW videos) will be provided on a pen drive. If an HDD is required, the market value of the storage device will be borne by the client.",
    },
    {
      question: "How long are the quoted prices valid?",
      answer:
        "All quoted prices are valid for a 60-day period from the date of the quotation unless agreed to in writing stating otherwise.",
    },
    {
      question: "What happens in case of technical glitches or data loss?",
      answer:
        "The studio will not be responsible for any technical glitch or data loss during videography, photography, or data copying.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#FCF7F8] rounded-lg shadow-lg p-6 mb-8">
      <h1 className="text-2xl font-bold text-[#457b9d] mb-6">FREQUENTLY ASKED QUESTIONS</h1>
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left text-lg font-semibold text-[#457b9d] hover:text-[#2a4a5f] transition-colors duration-300 flex justify-between items-center"
          >
            {item.question}
            <span className="text-xl">
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>
          {activeIndex === index && (
            <div className="mt-2 text-gray-700">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;