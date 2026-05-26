import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
