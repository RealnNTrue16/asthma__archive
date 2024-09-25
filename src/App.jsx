import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import { Routes, Route } from "react-router-dom";
import Symptoms from "./Components/Symptoms/Symtoms";
import Treatments from "./Components/Treatments/Treatments";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <div className="page__content">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/*    <Route path="/triggers" element={<Triggers />} /> */}
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/treatment" element={<Treatments />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
