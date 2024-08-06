import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import VideoSection from "./pages/VideoSection";
import CardSection from "./pages/CardSection";
import Photography from "./pages/Photography";
import QRSection from "./pages/QRSection";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Service from "./pages/Service";
import Error from "./pages/Error";
import  AdminLayout  from "./pages/AdminLayout";
import  AdminUsers  from "./pages/AdminUsers";
import  AdminContacts  from "./pages/AdminContacts";
import  AdminUpdate  from "./pages/AdminUpdate";
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