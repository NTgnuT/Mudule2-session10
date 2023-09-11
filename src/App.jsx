import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import ListProduct from "./Pages/ListProduct";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import Description from "./Pages/Description";
import { useEffect } from "react";
import PrivateRouter from "./Pages/private/PrivateRouter";
import HomeAdmin from "./Pages/private/HomeAdmin";
import ManagerProduct from "./Pages/private/ManagerProduct";
import ManagerUse from "./Pages/private/ManagerUse";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        {/* Router được phép truy cập */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/product/:id" element={<Description />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        {/* Router chỉ admin mới có thể truy cập */}
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<HomeAdmin />} />
          <Route path="manager-product" element={<ManagerProduct />} />
          <Route path="manager-user" element={<ManagerUse />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
