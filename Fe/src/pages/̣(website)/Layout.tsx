import { Outlet } from "react-router-dom";
import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
const LayoutWebsite = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Outlet />
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default LayoutWebsite;
