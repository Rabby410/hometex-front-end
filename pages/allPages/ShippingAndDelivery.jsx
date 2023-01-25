import SAD from '../../components/ShippingAndDelivery/SAd'
import Topbar from "../../components/Header/topbar";
import Midbar from "../../components/Header/midbar";
import Footbar from "../../components/Header/footbar";
import Footer from "../../components/Footer/footer";
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