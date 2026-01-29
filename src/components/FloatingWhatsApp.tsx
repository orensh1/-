import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const FloatingWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/972501234567"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 left-6 md:bottom-8 md:left-8 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center cursor-pointer group"
        >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
            <FaWhatsapp className="w-8 h-8 relative z-10" />

            {/* Tooltip */}
            <span className="absolute left-full ml-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 pointer-events-none">
                דבר איתנו בווטסאפ
            </span>
        </motion.a>
    );
};
