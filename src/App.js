import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home, AboutUs } from "./components/pages";
import Footer from "./components/Footer";

function App() {
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
