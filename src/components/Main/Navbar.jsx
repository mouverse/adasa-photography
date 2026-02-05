import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiSearch, HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { to: '/', label: 'الرئيسية' },
        { to: '/blog', label: 'المدونة' },
        { to: '/about', label: 'من نحن' },
    ];

    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link className="flex items-center gap-3 group" to="/" data-discover="true">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                            <img alt="Photography Logo" className="w-full h-full object-cover" src="/logo.png" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">عدسة</span>
                            <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">عالم التصوير الفوتوغرافي</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    data-discover="true"
                                    aria-current={isActive(item.to) ? 'page' : undefined}
                                    className={
                                        'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ' +
                                        (isActive(item.to)
                                            ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white'
                                            : 'text-neutral-400 hover:text-white')
                                    }
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                            <HiSearch className="w-5 h-5" />
                        </button>
                        <Link className="btn-primary text-sm" to="/blog" data-discover="true">ابدأ القراءة</Link>
                    </div>
                    <button 
                        onClick={toggleMenu}
                        className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </button>
                </div>
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
                        <div className="flex flex-col space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    data-discover="true"
                                    aria-current={isActive(item.to) ? 'page' : undefined}
                                    className={
                                        'px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ' +
                                        (isActive(item.to)
                                            ? 'bg-orange-500/10 text-orange-500 border border-orange-500/30'
                                            : 'text-neutral-400 hover:bg-[#1a1a1a] hover:text-white')
                                    }
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link className="btn-primary text-sm text-center mt-2" to="/blog" data-discover="true">ابدأ القراءة</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;