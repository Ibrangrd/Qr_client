import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import VideoSection from "./pages/VideoSection";
import CardSection from "./pages/CardSection";
import Photoinfo1 from "./pages/Photoinfo1";
import Photoinfo2 from "./pages/Photoinfo2";
import Photoinfo3 from "./pages/Photoinfo3";
import Photoinfo4 from "./pages/Photoinfo4";
import Photoinfo5 from "./pages/Photoinfo5";
import Photoinfo6 from "./pages/Photoinfo6";
import Photography from "./pages/Photography";
import Hotel from "./pages/Hotel";
import Courier from "./pages/Courier";
import Cars from "./pages/Cars";
import QRSection from "./pages/QRSection";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Service from "./pages/Service";
import Error from "./pages/Error";
import AdminLayout from "./pages/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminUpdate from "./pages/AdminUpdate";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("light");
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <Header setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videos" element={<VideoSection />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/Photoinfo1" element={<Photoinfo1/>} />
          <Route path="/Photoinfo2" element={<Photoinfo2/>} />
          <Route path="/Photoinfo3" element={<Photoinfo3/>} />
          <Route path="/Photoinfo4" element={<Photoinfo4/>} />
          <Route path="/Photoinfo5" element={<Photoinfo5/>} />
          <Route path="/Photoinfo6" element={<Photoinfo6/>} />
          <Route path="/Hotel" element={<Hotel/>} />       
          <Route path="/Courier" element={<Courier/>}/>
          <Route path="/Cars" element={<Cars/>}/>            
          <Route path="/cards" element={<CardSection />} />
          <Route path="/qr" element={<QRSection />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;