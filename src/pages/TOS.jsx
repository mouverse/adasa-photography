import { useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import TosHero from "../components/TOS/TosHero";
import TosTerms from "../components/TOS/TosTerms";

function TOS() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Navbar />
            <main className="grow pt-20 bg-[#0a0a0a] text-white">
                <TosHero />
                <TosTerms />
            </main>
            <Footer />
        </>
    );
}

export default TOS;

