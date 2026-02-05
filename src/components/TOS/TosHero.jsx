import { Link } from "react-router-dom";
import { HiChevronLeft, HiDocumentText } from "react-icons/hi";

function TosHero() {
    return (
        <header className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]" />
            <div className="absolute inset-0 opacity-30">
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px]" />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <nav className="flex items-center justify-center gap-2 text-sm mb-8">
                    <Link
                        className="text-neutral-400 hover:text-white transition-colors"
                        to="/"
                        data-discover="true"
                    >
                        الرئيسية
                    </Link>
                    <HiChevronLeft className="w-4 h-4 text-neutral-600 rotate-180" />
                    <span className="text-orange-500 font-medium">شروط الخدمة</span>
                </nav>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
                    <HiDocumentText className="w-8 h-8 text-orange-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    شروط الخدمة
                </h1>
                <p className="text-neutral-400 text-lg">آخر تحديث: 15 يناير 2026</p>
            </div>
        </header>
    );
}

export default TosHero;

