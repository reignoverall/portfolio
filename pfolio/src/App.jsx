import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-slate-500">
        <Router>
          Navbar
          <Routes>
            <Route path="/" element="Home"></Route>
            <Route path="/projects" element="Projects"></Route>
            <Route path="contact" element={"Contact"}></Route>
            <Route path="/about" element="About"></Route>
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
