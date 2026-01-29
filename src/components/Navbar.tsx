import React, { useState } from 'react';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-brand-lime flex items-center justify-center rounded-xl shadow-lg shadow-brand-lime/20">
                            <Wrench className="w-6 h-6 text-brand-dark" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">שרון אינסטלציה</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#services" className="text-gray-600 hover:text-brand-dark font-medium transition-colors">שירותים</a>
                        <a href="#why-us" className="text-gray-600 hover:text-brand-dark font-medium transition-colors">למה אנחנו</a>
                        <a href="#contact" className="text-gray-600 hover:text-brand-dark font-medium transition-colors">צור קשר</a>
                        <a
                            href="tel:050-1234567"
                            className="bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg shadow-gray-900/20"
                        >
                            <Phone className="w-4 h-4" />
                            <span>050-1234567</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-100 bg-white"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <a onClick={() => setIsOpen(false)} href="#services" className="block text-lg font-medium text-gray-800">שירותים</a>
                            <a onClick={() => setIsOpen(false)} href="#why-us" className="block text-lg font-medium text-gray-800">למה אנחנו</a>
                            <a onClick={() => setIsOpen(false)} href="#contact" className="block text-lg font-medium text-gray-800">צור קשר</a>
                            <a
                                href="tel:050-1234567"
                                className="block w-full text-center bg-brand-lime text-brand-dark py-3 rounded-xl font-bold mt-4"
                            >
                                חייג עכשיו
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
