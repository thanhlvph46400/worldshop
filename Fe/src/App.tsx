import { Navigate, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./pages/(admin)/Layout";
import LayoutWebsite from "./pages/̣(website)/Layout";
import HomePage from "./pages/̣(website)/home/Page";
import SignupPage from "./pages/(auth)/signup/Page";
import DashboardPage from "./pages/(admin)/dashboard/Page";
import NotFoundPage from "./pages/̣(website)/404/Page";
import PageShop from "./pages/̣(website)/Shop/PageShop";
import ProductDetail from "./pages/̣(website)/Shop/Product-detail/Page";
import ProductCart from "./pages/̣(website)/Shop/Product-cart/Page";
import PaymentPage from "./pages/̣(website)/payment/Page";
import AboutPage from "./pages/̣(website)/about/Page";
import ContactPage from "./pages/̣(website)/about/contact/Page";
import ProductlistAdmin from "./pages/(admin)/dashboard/productlist/Page";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="shop" element={<PageShop />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="product-cart" element={<ProductCart />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={<ProductlistAdmin />} />
          <Route path="product-add" element={<ProductAdd />} />
          <Route path="product-edit/:id" element={<ProductEdit />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
