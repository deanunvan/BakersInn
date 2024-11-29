import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";




function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
