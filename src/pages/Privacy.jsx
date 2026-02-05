import { useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import PrivacyHero from "../components/Privacy/PrivacyHero";
import PrivacyTerms from "../components/Privacy/PrivacyTerms";
function Privacy() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Navbar />
            <main className="grow pt-20 bg-[#0a0a0a] text-white">
                <PrivacyHero />
                <PrivacyTerms />
            </main>
            <Footer />
        </>
    );
}

export default Privacy;

