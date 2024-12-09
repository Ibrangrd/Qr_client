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
  MScan,
  CusScan,
  CusScan2,
  CusAfter,
  Hotel,
  Photo,
  Home,
  Courier,
  FireCrakers,
  Cars,
  Memories,
  Catering,
  ParCards,
  QrCards,
  CateringMain,
} from "./pages/index.js";

import Mscan from "./pages/Scan/MScan.jsx";
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
            <Route 
            path="/qrcards"
            element={
              <Suspense fallback={<div>Loading QR Special Cards...</div>}> 
              <QrCards />
              </Suspense>
            }
          />
          <Route path="/Photoinfo1" element={<Suspense fallback={<Loading />}> <Photoinfo1 /></Suspense>} />
          <Route path="/Photoinfo2" element={<Suspense fallback={<Loading />}> <Photoinfo2 /></Suspense>} />
          <Route path="/Photoinfo3" element={<Suspense fallback={<Loading />}> <Photoinfo3 /></Suspense>} />
          <Route path="/Photoinfo4" element={<Suspense fallback={<Loading />}> <Photoinfo4 /></Suspense>} />
          <Route path="/Photoinfo5" element={<Suspense fallback={<Loading />}> <Photoinfo5 /></Suspense>} />
          <Route path="/Photoinfo6" element={<Suspense fallback={<Loading />}> <Photoinfo6 /></Suspense>} />
          <Route path="/Photoinfo7" element={<Suspense fallback={<Loading />}> <Photoinfo7 /></Suspense>} />
          <Route path="/Photoinfo8" element={<Suspense fallback={<Loading />}> <Photoinfo8 /></Suspense>} />
          <Route path="/Photoinfo9" element={<Suspense fallback={<Loading />}> <Photoinfo9 /></Suspense>} />
          <Route path="/Catering" element={<Suspense fallback={<Loading />}> <Catering /></Suspense>} />
          <Route path="/FireCrackers" element={<Suspense fallback={<Loading />}> <FireCrakers /></Suspense>} />
          <Route path="/memories" element={<Suspense fallback={<Loading />}> <Memories /></Suspense>} />
          <Route path="/Hotel" element={<Suspense fallback={<Loading />}> <Hotel /></Suspense>} />
          <Route path="/MScan" element={<Suspense fallback={<Loading />}> <MScan /></Suspense>} />
          <Route path="/Scan/:inviteId" element={<Suspense fallback={<Loading />}> <ScanVideo /></Suspense>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/service" element={<Service />} />
          <Route path="/CateringMain" element={<CateringMain/>}/>
          {/* <Route path="/Photo/:1" element={<Photo/>} /> */}
          <Route path="/ParCards" element={<ParCards/>} />
          <Route path="/:inviteId" element={<CusScan />} /> 
          <Route path="/i/:inviteId" element={<CusScan2 />} />
          <Route path="/Courier" element={<Courier />} />
          <Route path="/Cars" element={<Cars />} />
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
