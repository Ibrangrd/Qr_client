import { useContext } from "react";
import HomeQR from "./HomeQR";
import HomeAboutUs from "./HomeAboutUs";
import HomeService from "./HomeService";
import HomeTop from "./HomeTop";
import HomeVideo from "./HomeVideo";
import { ThemeContext } from "../../App";
import HomeFAQ from "./HomeFAQ";
import HomeReview from "./HomeReview";
import BenefitsSection from "./BenefitsSection";
import Count from "./Count";
const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-[#FCF7F8]"}`}>
      <HomeTop />
      <HomeAboutUs />
      <HomeService />
      <HomeVideo />
      <HomeQR />
      <BenefitsSection/>
      <Count/>
      <HomeReview />
      <HomeFAQ count={4} />

    <div className="fixed sm:bottom-5 bottom-2 right-3 sm:right-10 flex ">
    <a href="https://wa.me/919832704206?text=Hello!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%3F" target="_blank">
        <button className="px-5 py-2 sm:px-8 sm:py-3 font-semibold bg-pink-200  border-pink-500 border-2 text-black rounded-full shadow-lg sm:hover:bg-green-700 transition">
            💬 Chat
        </button>
    </a>
</div>

    </div>
  );
};

export default Home;
