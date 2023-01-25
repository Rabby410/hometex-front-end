import SAD from '../../components/ShippingAndDelivery/SAd'
import Topbar from "../../components/Header/Topbar";
import Midbar from "../../components/Header/Midbar";
import Footbar from "../../components/Header/Footbar";
import Footer from "../../components/Footer/Footer";
function ShippingAndDelivery() {
    return (<>
        <Topbar />
        <Midbar />
        <Footbar />
        <SAD />
        <Footer />
    </>
    );
}

export default ShippingAndDelivery;