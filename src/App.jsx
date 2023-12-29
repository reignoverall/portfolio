import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Projects } from "./pages";
import Tensor from "./pages/tensor.html";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-slate-100">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects"
              element={
                <>
                  <Projects />
                </>
              }
            />
            <Route path="contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/tensor.html" />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
