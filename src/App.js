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
import OneDiscount from "./components/pages/discount/OneDiscount";
// Admin panel
import AdminPanel from "./components/admin-panel/AdminPanel";
import AllInfo from "./components/admin-panel/pages/all-information/AllInfo";
import Products from "./components/admin-panel/pages/products/Products";
import DiscountAdmin from "./components/admin-panel/pages/discount/Discount";
import Categories from "./components/admin-panel/pages/categories/Categories";
// Users panel
import UsersPanel from "./components/users-panel/UsersPanel";

const App = () => {

  return (
    <div className="w-full">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="discount" element={<Discounts />} />
          <Route path="discount/:oneDiscount" element={<OneDiscount />} />
          <Route path="contact" element={<Contact />} />
          <Route path="for-partners" element={<Partners />} />
          {/* ADMIN */}

          <Route path="admin" element={<AdminPanel />} >
            <Route index element={<AllInfo />} />
            <Route path="products" element={<Products />} />
            <Route path="discount" element={<DiscountAdmin />} />
            <Route path="categories" element={<Categories />} />
          </Route>

          {/* USER */}

          <Route path="user" element={<UsersPanel />} >
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
