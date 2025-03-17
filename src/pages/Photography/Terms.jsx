import React, { useState } from "react";

const TermsAndConditions = () => {
  const [showTerms, setShowTerms] = useState(false); // State to manage terms visibility

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#FCF7F8] rounded-lg shadow-lg p-6 mb-8">
      <button
        onClick={() => setShowTerms(!showTerms)}
        className="w-full text-center text-lg font-semibold text-[#457b9d] hover:text-[#2a4a5f] transition-colors duration-300"
      >
        {showTerms ? "Hide Terms & Conditions" : "View Terms & Conditions"}
      </button>
      {showTerms && (
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-[#457b9d] mb-4">
            TERMS & CONDITIONS
          </h1>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              PAYMENT TERM: Booking amount 30%, total 70% payment will have to be
              done till the program ends. Remaining 30% will have to be paid at
              the time of delivery.
            </li>
            <li>
              Traveling and lodging facilities will be borne by the client.
            </li>
            <li>
              All the soft copies (RAW photos and RAW video) will be provided in
              a pen drive. Either HDD, the market value of the storage device will
              be borne by the client.
            </li>
            <li>
              All Quoted prices are valid for a 60-day period from the date of the
              quotation unless agreed to in writing stating otherwise.
            </li>
            <li>
              The studio will not be responsible for any technical glitch or data
              loss during videography, photography, or data copying.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;