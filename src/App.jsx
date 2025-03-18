import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, lazy, Suspense, useState, useEffect } from "react";
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
  CardsPartners,
  CardMahalSection,
  CateringMain,
  YourMenu,
  CateringSection,
  QrCards,
  LoginForImage,
  MakeUp,
  ComingSoon,
  VerticalScan,
  Preloader,
  GiftSection,
  CusScan,
  Xyz2,
  Wedding,
  Password,
  PhotosPage,
  WeddingSite,
} from "./pages/index.js";

export const ThemeContext = createContext("light");

const App = () => {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add this state

  // Hide Preloader after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    
    <Router>
      <ThemeContext.Provider value={theme}>
      {loading ? (
        <Preloader />
      ) : (
          <>
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
                path="/cardmahal"
                element={
                  <Suspense fallback={<Loading />}>
                    <CardMahalSection />
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
              <Route path="/qrcards" element={<Suspense fallback={<div>Loading QR Special Cards...</div>}> <QrCards /> </Suspense>} />
              <Route path="/FireCrackers" element={<Suspense fallback={<Loading />}> <FireCrakers /></Suspense>} />
              <Route path="/memories" element={<Suspense fallback={<Loading />}> <Memories /></Suspense>} />
              <Route path="/Hotel" element={<Suspense fallback={<Loading />}> <Hotel /></Suspense>} />
              <Route path="/MScan" element={<Suspense fallback={<Loading />}> <MScan /></Suspense>} />
              <Route path="/Scan/:inviteId" element={<Suspense fallback={<Loading />}> <ScanVideo /></Suspense>} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/comingsoon" element={<ComingSoon />} />
              <Route path="/service" element={<Service />} />
              <Route path="/weddingsite" element={<WeddingSite />} />
              <Route path="/makeup" element={<MakeUp />} />
              <Route path="/CateringMain" element={<CateringMain />} />
              <Route path="/Catering" element={<Catering />} />
              <Route path="/CateringSection" element={<CateringSection />} />
              <Route path="/yourmenu" element={<YourMenu />} />
              <Route path="/images" element={<LoginForImage />} />
              <Route path="/Cards" element={<CardsPartners />} />
              <Route path="/i/:inviteId" element={<CusScan2 />} />
              <Route path="/xyz2" element={<Xyz2 />} />
              <Route path="/wedding" element={<Wedding />} />
              <Route path="/ayushmati_weds_ayushman" element={<VerticalScan />} />
              <Route path="/Courier" element={<Courier />} />
              <Route path="/Cars" element={<Cars />} />
              <Route path="/CusAfter" element={<CusAfter />} />
              <Route path="/gift" element={<GiftSection />} />
              <Route path="/photo/:inviteId" element={<Photo />} />
              <Route path="*" element={<Error />} />
              <Route path="/password" element={<Password setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/photos" element={<PhotosPage />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="users" element={<AdminUsers />} />
                <Route path="contacts" element={<AdminContacts />} />
                <Route path="users/:id/edit" element={<AdminUpdate />} />
              </Route>
            </Routes>
            <Footer />
          </>
        )}
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
