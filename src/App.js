import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// imports header footer 
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// imports pages
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Partners from "./components/pages/for-partners/Partners";
import Discounts from "./components/pages/discount/AllDiscounts";
import Delivery from "./components/pages/delivery/Delivery";
import OneDiscount from "./components/pages/discount/OneDiscount";
import AllProducts from "./components/pages/produts/Products";
import Cart from "./components/pages/cart/ProductCart";
import SignIn from "../src/components/pages/sing-in/Login";
import SignUp from "../src/components/pages/sing-up/SingUp";
import Offerta from "./components/pages/offerta/Offerta";
import Payment from "./components/pages/payment/Payment";
import Vacancies from "./components/pages/vacancies/Vacancies";
// Admin panel
import AdminPanel from "./components/admin-panel/AdminPanel";
import AllInfo from "./components/admin-panel/pages/all-information/AllInfo";
import Products from "./components/admin-panel/pages/products/Products";
import DiscountAdmin from "./components/admin-panel/pages/discount/Discount";
import Categories from "./components/admin-panel/pages/categories/Categories";
import VacanciesAdmin from "./components/admin-panel/pages/vacancies/VacanciesAdmin";
// Users panel
import UsersPanel from "./components/users-panel/UsersPanel";
// Import protection component
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div className="w-full">
      <Router>
        <Header />
        <Routes>
          {/* ПУБЛІЧНІ МАРШРУТИ */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="discount" element={<Discounts />} />
          <Route path="discount/:oneDiscount" element={<OneDiscount />} />
          <Route path="contact" element={<Contact />} />
          <Route path="for-partners" element={<Partners />} />
          <Route path="products/:listProductsByCategory" element={<AllProducts />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/dogovir-publichnoyi-oferty" element={<Offerta />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/vacancies" element={<Vacancies />} />
          {/* ЗАХИЩЕНІ МАРШРУТИ ДЛЯ АДМІНІСТРАТОРА */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<AdminPanel />}>
              <Route index element={<AllInfo />} />
              <Route path="products" element={<Products />} />
              <Route path="discount" element={<DiscountAdmin />} />
              <Route path="categories" element={<Categories />} />
              <Route path="vacancies" element={<VacanciesAdmin />} />
            </Route>
          </Route>

          {/* ЗАХИЩЕНІ МАРШРУТИ ДЛЯ ЗВИЧАЙНОГО КОРИСТУВАЧА */}
          <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
            <Route path="/user" element={<UsersPanel />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

