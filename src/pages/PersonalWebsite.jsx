import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const WeddingSite = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showRsvp, setShowRsvp] = useState(false); // Toggle RSVP section
  const [rsvp, setRsvp] = useState({ name: '', guests: '', message: '', foodPreference: 'veg' }); // Add food preference
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  // Countdown logic
  useEffect(() => {
    const weddingDate = new Date('2025-03-27T18:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle RSVP form changes
  const handleRsvpChange = (e) => {
    const { name, value } = e.target;
    setRsvp({ ...rsvp, [name]: value });
  };

  // Handle RSVP form submission
  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show thank you message
    setRsvp({ name: '', guests: '', message: '', foodPreference: 'veg' }); // Reset form
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen font-sans">
      {/* Header */}
      <header className="text-center py-5 bg-gradient-to-r from-pink-400 to-pink-400 text-white">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">Ram Weds Sita</h1>
        <div className="flex justify-center items-center w-full h-auto my-8">
      <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px]">
        <DotLottieReact
          src="https://lottie.host/b8fada29-4d78-4c5a-a90a-40d8de0c15f3/tJPiAaSFOe.lottie"
          loop
          autoplay
          className="w-full h-auto"
        />
      </div>
    </div>
  
        <p className="text-2xl italic">We are getting married on March 27, 2025!</p>
      </header>

      {/* Countdown */}
      <section className="text-center py-12 bg-white shadow-lg">
        <h2 className="text-4xl font-semibold mb-4">Big Day Countdown</h2>
        {timeLeft ? (
          <p className="text-3xl text-pink-600 font-mono">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s to go!
          </p>
        ) : (
          <p className="text-3xl text-pink-600">🎉 Happening Today! 🎉</p>
        )}
      </section>

      {/* Button to toggle RSVP section */}
      <div className="text-center py-12">
        <button
          onClick={() => setShowRsvp(!showRsvp)}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold rounded-full hover:from-pink-600 hover:to-pink-800 transition-all shadow-lg hover:shadow-xl"
        >
          {showRsvp ? 'Hide RSVP Form' : 'RSVP Now'}
        </button>
      </div>

      {/* RSVP Section */}
      {showRsvp && (
        <section className="py-12 bg-pink-50">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-8 text-center text-pink-700">RSVP</h2>
            {isSubmitted ? (
              <p className="text-center text-2xl text-pink-700">Thank you for your RSVP! 💖</p>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
                <input
                  type="text"
                  name="name"
                  value={rsvp.name}
                  onChange={handleRsvpChange}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-lg border bg-pink-100 border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  required
                />
                <input
                  type="number"
                  name="guests"
                  value={rsvp.guests}
                  onChange={handleRsvpChange}
                  placeholder="No. of Guests Attending"
                  className="w-full px-4 py-3 rounded-lg border bg-pink-100 border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  required
                />
                <div className="flex items-center space-x-4">
                  <select
                    name="foodPreference"
                    value={rsvp.foodPreference}
                    onChange={handleRsvpChange}
                    className="px-4 py-2 rounded-lg border bg-pink-100 border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                  >
                    <option value="veg">Veg</option>
                    <option value="non-veg">Non-Veg</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  value={rsvp.message}
                  onChange={handleRsvpChange}
                  placeholder="Any Message (Optional)"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border bg-pink-100 border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold rounded-full hover:from-pink-600 hover:to-pink-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit RSVP
                </button>
              </form>
            )}
          </div>
        </section>
      )}

      {/* Event Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 text-center text-pink-700">Event Schedule</h2>
          <div className="space-y-8">
            {[
              { title: "Haldi Ceremony", date: "March 25, 2025", time: "10:00 AM", venue: "Arya Samaj Mandir, Delhi" },
              { title: "Sangeet Night", date: "March 26, 2025", time: "7:00 PM", venue: "The Grand Banquet, Delhi" },
              { title: "Wedding", date: "March 27, 2025", time: "6:00 PM", venue: "Rose Garden, Delhi" },
              { title: "Reception", date: "March 28, 2025", time: "7:00 PM", venue: "The Imperial, Delhi" }
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-pink-100 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-pink-700">{event.title}</h3>
                <p className="text-gray-700">📅 {event.date}</p>
                <p className="text-gray-700">⏰ {event.time}</p>
                <p className="text-gray-700">📍 {event.venue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingSite;