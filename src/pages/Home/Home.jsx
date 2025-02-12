import { useContext } from "react";
import HomeQR from "./HomeQR";
import HomeAboutUs from "./HomeAboutUs";
import HomeService from "./HomeService";
import HomeTop from "./HomeTop";
import HomeVideo from "./HomeVideo";
import { ThemeContext } from "../../App";
import HomeFAQ from "./HomeFAQ";
import HomeReview from "./HomeReview";

const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-[#FCF7F8]"}`}>
      <HomeTop />
      <HomeAboutUs />
      <HomeService />
      <HomeVideo />
      <HomeQR />
      <HomeReview />
      <HomeFAQ count={4} />

    <div className="fixed sm:bottom-5 bottom-1 left-3 right-3 sm:left-6 sm:right-6 flex justify-between">
    <a href="tel:+919832704206" target="_blank">
        <button className="px-5 py-2 bg-green-600 text-white rounded-full shadow-lg sm:hover:bg-green-700 transition">
            📞Call
        </button>
    </a>
    
    <a href="https://wa.me/919832704206?text=Hello!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%3F" target="_blank">
        <button className="px-5 py-2 bg-green-600 text-white rounded-full shadow-lg sm:hover:bg-green-700 transition">
            💬Chat
        </button>
    </a>
</div>

    </div>
  );
};

export default Home;
