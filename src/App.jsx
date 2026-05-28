import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";

import "./App.css";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
