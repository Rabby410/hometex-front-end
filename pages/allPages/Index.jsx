import Topbar from "../../components/Header/Topbar";
import Midbar from "../../components/Header/Midbar";
import Footbar from "../../components/Header/Footbar";
import Footer from "../../components/Footer/Footer";
import Blog from "../../components/Landing_body/Blog";
import Pillow from "../../components/Landing_body/Pillow";
import Prefooter from "../../components/Footer/Prefooter";
import BathSupport from "../../components/Landing_body/Bath_support";
import FeaturedCollection from "../../components/Landing_body/FeaturedCollection";
import Exclusive from "../../components/Landing_body/Exclusive";
import Curtains from "../../components/Landing_body/Curtains";
import Comfoters from "../../components/Landing_body/Comfoters";
import NewArrivales from "../../components/Landing_body/NewArrivales";
import Satranji from "../../components/Landing_body/Satranji";
import ComfortInBag from "../../components/Landing_body/ComfortInBag";
import Box_banner from "../../components/Landing_body/Box_banner";
import AllCatagories from "../../components/Landing_body/AllCatagories";
import CustomPolyc from "../../components/Landing_body/CustomPolyci";
import BannerTop from "../../components/Landing_body/Bannertop";
import Slider from "../../components/Landing_body/Slider";
import SidebarR from "../../components/Landing_body/RightSidebar";
const Index = () => {
  return (
    <>
      <Topbar />
      <Midbar />
      <Footbar />
      <SidebarR />
      <Slider />
      <BannerTop />
      <CustomPolyc />
      <AllCatagories />
      <Box_banner />
      <ComfortInBag />
      <Satranji />
      <NewArrivales />
      <Comfoters />
      <Curtains />
      <Exclusive />
      <FeaturedCollection />
      <BathSupport />
      <Blog />
      <Pillow />
      <Prefooter />
      <Footer />
    </>
  );
};

export default Index;
