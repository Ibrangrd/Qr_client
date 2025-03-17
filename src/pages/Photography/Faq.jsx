import { HelpCircle } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const FAQ = () => {
  const theme = useContext(ThemeContext);

  const faq = [
    {
      id: 1,
      ques: "What are QR cards?",
      ans: "QR cards are digital invitations that include a QR code. Guests can scan the QR code with their smartphones to access the event details, RSVP, and other information online.",
    },
    {
      id: 2,
      ques: "How do QR cards work?",
      ans: "After we design your card, we generate a unique QR code that links to your event page. Guests scan this code to view all the details.",
    },
    {
      id: 3,
      ques: "How do I customize my QR card?",
      ans: "You can use our online design tool to customize your card with your chosen text, colors, and images.",
    },
    {
      id: 4,
      ques: "Can I upload my own design?",
      ans: "Yes, you can upload your own design, and we will integrate the QR code into it.",
    },
  ];

  return (
    <div data-theme={theme} className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Frequently asked questions</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {faq.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-start gap-2">
                <HelpCircle className="w-5 h-5 mt-1 text-gray-500" />
                <h3 className="text-lg font-semibold">{item.ques}</h3>
              </div>
              <p className="text-gray-600">{item.ans}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
