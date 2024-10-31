import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { HomePage } from "./components/pages/home-page/HomePage";
import { Discount } from "./components/pages/discount/Discount";
import { Delivery } from "./components/pages/delivery/Delivery";
import { Vacancies } from './components/pages/vacancies/Vacancies';
import { Payment } from './components/pages/payment/Payment';
import { About } from './components/pages/about/About';
import { News } from './components/pages/news/News';
import { AnOffer } from './components/pages/an-offer/AnOffer';
import { Partners } from './components/pages/partners/Partners';
import { Contact } from './components/pages/contact/Contact';
import { SingUp } from "./components/pages/sing-up/SingUp";
import { Product } from './components/pages/product/Product';
export const App = () => {
  return (
    <div className="w-full font-comfortaa">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="discount" element={<Discount />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="payment" element={<Payment />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="an-offer" element={<AnOffer />} />
          <Route path="for-partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sing-up" element={<SingUp />} />
          <Route path="product/:name-product" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
