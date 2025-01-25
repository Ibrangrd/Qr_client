import { useContext } from "react"
import HomeQR from "./HomeQR"
import HomeAboutUs from "./HomeAboutUs"
import HomeService from "./HomeService"
import HomeTop from "./HomeTop"
import HomeVideo from "./HomeVideo"
import {ThemeContext} from "../../App"
import HomeFAQ from "./HomeFAQ"
import HomeReview from "./HomeReview"

const Home = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`${theme === "dark"? "bg-black" : "bg-[#FCF7F8]" }`}>
      <HomeTop/>
      <HomeAboutUs/>
      <HomeService/>
      <HomeVideo/>
      <HomeQR/>
      <HomeReview/>
      <HomeFAQ count= {4}/>
    </div>
  )
}

export default Home