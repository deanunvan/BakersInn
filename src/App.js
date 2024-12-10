import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home, AboutUs } from "./components/pages";
import Footer from "./components/Footer";
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
