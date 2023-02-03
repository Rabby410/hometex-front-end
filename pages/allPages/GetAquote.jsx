import GAQ from "../../components/getAQuote/GetAQuote";
import Topbar from "../../components/Header/Topbar";
import Midbar from "../../components/Header/Midbar";
import Footbar from "../../components/Header/Footbar";
import Footer from "../../components/Footer/Footer";
function GetAquote() {
  return (
    <>
      <Topbar />
      <Midbar />
      <Footbar />
      <GAQ />
      <Footer />
    </>
  );
}

export default GetAquote;
