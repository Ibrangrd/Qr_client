import { useContext } from "react"
import HomeQR from "./HomeQR"
import HomeService from "./HomeService"
import HomeTop from "./HomeTop"
import HomeVideo from "./HomeVideo"
import { ThemeContext } from "../App"
import HomeFAQ from "./HomeFAQ"

const Home = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`${theme === "dark"? "bg-black" : "bg-white" }`}>
      <HomeTop/>
      <HomeService/>
      <HomeVideo/>
      <HomeQR/>
      <HomeFAQ count= {4}/>
    </div>
  )
}

export default Home