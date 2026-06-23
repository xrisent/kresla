import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";

import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import AdminTableCatalog from "./pages/AdminTable/AdminTableCatalog";
import EditProduct from "./pages/AdminTable/EditProduct";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getKresla } from "./kreslaSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/armchairs")
      .then(({ data }) => dispatch(getKresla(data)));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/admin-table" element={<AdminTableCatalog />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
