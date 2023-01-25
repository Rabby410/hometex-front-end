import Topbar from "../../components/Header/Topbar";
import Midbar from "../../components/Header/Midbar";
import Footbar from "../../components/Header/Footbar";
import Footer from "../../components/Footer/Footer";
import PP from "../../components/privacyPolicy/PrivacyPolicy"
function PrivacyPolicy() {
    return (
        <div>
            <Topbar />
        <Midbar />
        <Footbar />
        <PP />
        <Footer />
        </div>
    );
}

export default PrivacyPolicy;