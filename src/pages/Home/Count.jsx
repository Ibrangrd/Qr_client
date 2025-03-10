import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Count = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center bg-[#FCF7F8]]  pb-10 sm:py-16 sm:px-6">
      <h2 className="sm:sm:text-5xl text-3xl font-bold text-center text-[#4E8098]">
        QR Weds <span className="text-[#50a0c5]">Transforms Weddings</span> with Digital Innovation
      </h2>
      <p className="text-black text-lg text-center mt-2 max-w-2xl pb-4 sm:pb-0">
        Revolutionizing wedding experiences with seamless QR technology. The numbers speak for themselves.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-2 sm:mt-10">
        <div className="text-center">
          <h3 className="sm:text-5xl text-3xl  font-bold text-[#4E8098]">
            {inView && <CountUp start={0} end={200} duration={3} separator="," />}+
          </h3>
          <p className="text-lg text-black">Weddings Simplified</p>
        </div>

        <div className="text-center">
          <h3 className="sm:text-5xl text-3xl font-bold text-[#4E8098]">
            {inView && <CountUp start={0} end={100} duration={3} separator="," />}+
          </h3>
          <p className="text-lg text-black">Happy Couples</p>
        </div>

        <div className="text-center">
          <h3 className="sm:text-5xl text-3xl font-bold text-[#4E8098]">
            {inView && <CountUp start={0} end={10000} duration={3} separator="," />}+
          </h3>
          <p className="text-lg text-black">QR Codes Scanned</p>
        </div>
      </div>

      <div className="pt-6 flex flex-col">
        <p className="text-3xl text-black text-center pb-4">How to order</p>
        <ul className="steps">
        <li className="step step-primary text-black">Select Package</li>
        <li className="step step-primary text-black">Customize</li>
        <li className="step step-primary text-black">Chat & Confirm</li>
        <li data-content="✓" className="step step-primary text-black">Receive</li>
        </ul>
      </div>

     <Link to="/service">
      <button className="mt-8 px-6 py-3 text-red-600 border-red-200 border-2 hover:text-red-800 shadow-inner hover:bg-red-200 hover:scale-110 duration-300 rounded-full text-lg  transition">
      Get Started with QR Weds
      </button>
      </Link>
    </div>
  );
};

export default Count;
/*
Code Breakdown:
1️⃣ Importing Dependencies
jsx
Copy
Edit
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
React: The core library for building UI components.
useState: A React Hook that allows us to add state (variables that trigger re-renders) inside function components.
useEffect: A React Hook that lets us run side effects (such as event listeners or API calls) when the component is mounted or updated.
useRef: A React Hook that creates a reference to a DOM element, allowing us to interact with it directly.
CountUp: A third-party package that creates animated number counters.
2️⃣ Creating the StatsSection Component
jsx
Copy
Edit
const StatsSection = () => {
This defines a functional component in React.
The component contains logic for displaying animated numbers when it comes into view.
3️⃣ Defining State and Refs
jsx
Copy
Edit
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
inView: A state variable that tracks whether the section is visible on the screen.
setInView: A function to update the inView state.
sectionRef: A reference to the <div> element that contains the stats. We will use this to track when it appears on screen.
4️⃣ Detecting When the Section is Visible
jsx
Copy
Edit
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
useEffect(): Runs the code inside when the component is mounted.
IntersectionObserver: A built-in JavaScript API that detects when an element is visible in the viewport.
entry.isIntersecting: Checks if the section is at least 50% visible (threshold: 0.5).
If entry.isIntersecting === true, we call setInView(true) to trigger the number animation.
5️⃣ Connecting the Observer to Our Section
jsx
Copy
Edit
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
sectionRef.current is the actual <div> element.
observer.observe(sectionRef.current) starts observing when it enters the viewport.
6️⃣ Cleaning Up the Observer
jsx
Copy
Edit
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
This runs when the component unmounts (to prevent memory leaks).
It stops observing the section when it's no longer needed.
7️⃣ Rendering the UI
jsx
Copy
Edit
  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center bg-gray-100 py-16">
The ref={sectionRef} connects this <div> to sectionRef so that we can track its visibility.
The className uses Tailwind CSS for styling.
8️⃣ Animated Numbers
jsx
Copy
Edit
<h3 className="text-5xl font-bold text-black">
  {inView && <CountUp start={0} end={96000} duration={3} separator="," />}+
</h3>
inView && <CountUp />: If inView is true, the animation starts.
start={0} end={96000}: Starts from 0 and counts up to 96,000.
duration={3}: The animation lasts 3 seconds.
separator=",": Formats large numbers with commas (e.g., 96,000 instead of 96000).
9️⃣ Button
jsx
Copy
Edit
<button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800">
  Get Started
</button>
A simple call-to-action (CTA) button.
Uses Tailwind CSS for styling.
💡 Summary
Concept	Explanation
useState	Manages the state (inView) to track visibility.
useRef	References the section element to observe its position.
useEffect	Runs the observer logic when the component mounts.
IntersectionObserver	Detects when the section becomes visible.
CountUp	Animates numbers when inView becomes true.
Tailwind CSS	Used for styling.
🚀 Final Thoughts
This React component detects when the section is visible and animates numbers accordingly.
Uses React hooks (useState, useEffect, useRef) and IntersectionObserver for efficient performance.
Easy to customize for your QR Weds website (just change text, colors, and numbers!).
Would you like any modifications or explanations in more detail? 😊
*/