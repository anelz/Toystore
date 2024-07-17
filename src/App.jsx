import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./constants";
import Header from "./components/Header";
import Toys from "./pages/Toys";
import Toysinfo from "./pages/Toysinfo";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Alltoys from "./components/Alltoys";
import "./index.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllToys from "./pages/Toys";
import AdminPage from "./pages/Adminpage";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col stranica">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ADMIN} element={<AdminPage />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.TOYS} element={<Toys />} />
          <Route path={ROUTES.TOYS_INFO} element={<Toysinfo />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route
            path={ROUTES.FALLBACK}
            element={
              <div className="flex-1 justify-center items-center text-red-600">
                404 page not found
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
