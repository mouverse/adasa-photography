import { useEffect } from "react";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";
import NotFoundContent from "../components/404";

function NotFound() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Navbar />
            <main className="grow pt-20 bg-[#0a0a0a] text-white">
                <NotFoundContent />
            </main>
            <Footer />
        </>
    );
}

export default NotFound;

