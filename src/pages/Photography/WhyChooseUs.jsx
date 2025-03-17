import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    "Professional photographers",
    "High-quality albums",
    "Affordable pricing",
    "Customizable packages",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <CheckCircle className="text-green-500 w-6 h-6 mr-3" />
              <span className="text-lg font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
