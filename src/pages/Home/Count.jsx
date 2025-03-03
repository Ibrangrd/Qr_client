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
