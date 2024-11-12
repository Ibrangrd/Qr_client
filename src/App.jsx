import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, lazy, Suspense, useState } from "react";
import {
  Header,
  Footer,
  About,
  Contact,
  FAQ,
  VideoSection,
  QRSection,
  Photography,
  Loading,
  AdminContacts,
  AdminUpdate,
  AdminLayout,
  AdminUsers,
  Register,
  Login,
  Logout,
  Service,
  Error,
  Photoinfo1,
  Photoinfo2,
  Photoinfo3,
  Photoinfo4,
  Photoinfo5,
  Photoinfo6,
  Photoinfo7,
  Photoinfo8,
  Photoinfo9, 
  ScanVideo,
  Mscan,
  CusScan,
  CusScan2,
  CusAfter,
  Hotel,
  Home,
  Courier,
  Cars,
  Memories,
  Catering,
} from "./pages/index.js";
// import Home from "./pages/Home.jsx";
const CardSection = lazy((e) => import("./pages/Cards/CardSection.jsx"));

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
          <Route
            path="/photography"
            element={
              <Suspense fallback={<Loading />}>
                <Photography />
              </Suspense>
            }
          />
          <Route
            path="/videos"
            element={
              <Suspense fallback={<Loading />}>
                <VideoSection />
              </Suspense>
            }
          />
          <Route
            path="/cards"
            element={
              <Suspense fallback={<Loading />}>
                <CardSection />
              </Suspense>
            }
          />
          <Route
            path="/qr"
            element={
              <Suspense fallback={<Loading />}>
                <QRSection />
              </Suspense>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Photoinfo1" element={<Photoinfo1 />} />
          <Route path="/Photoinfo2" element={<Photoinfo2 />} />
          <Route path="/Photoinfo3" element={<Photoinfo3 />} />
          <Route path="/Photoinfo4" element={<Photoinfo4 />} />
          <Route path="/Photoinfo5" element={<Photoinfo5 />} />
          <Route path="/Photoinfo6" element={<Photoinfo6 />} />
          <Route path="/Photoinfo7" element={<Photoinfo7 />} />
          <Route path="/Photoinfo8" element={<Photoinfo8 />} />
          <Route path="/Photoinfo9" element={<Photoinfo9 />} />
          <Route path="/Catering" element={<Catering/>} />
          <Route path="/Scan/:inviteId" element={<ScanVideo />} />
          <Route path="/Mscan" element={<Mscan/>} />
          <Route path="/:inviteId" element={<CusScan />} /> 
          <Route path="/i/:inviteId" element={<CusScan2 />} />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/Courier" element={<Courier />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/memories" element ={<Memories/>} />
          <Route path="/CusAfter"  element={<CusAfter/>} />
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
