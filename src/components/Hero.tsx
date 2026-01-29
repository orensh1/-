import React from 'react';
import { ArrowLeft, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero_bg.png';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Professional Plumber"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-600">זמינים לקריאות חירום 24/7</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]"
                    >
                        פתרונות אינסטלציה
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 pb-2">מתקדמים ומקצועיים</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="text-xl text-gray-600 mb-10 leading-relaxed"
                    >
                        מומחים באיתור נזילות, פתיחת סתימות ושיקום קווי ביוב בטכנולוגיות מתקדמות.
                        שירות אמין, מהיר ומקצועי באזור השרון והמרכז.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            href="tel:+972524580590"
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="group bg-brand-lime text-brand-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#c3e815] transition-colors shadow-[0_20px_40px_-12px_rgba(210,248,36,0.5)] hover:shadow-[0_20px_40px_-12px_rgba(210,248,36,0.6)] flex items-center justify-center gap-2"
                        >
                            הזמן שירות עכשיו
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="#services"
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="px-8 py-4 rounded-xl font-bold text-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors text-gray-700 flex items-center justify-center"
                        >
                            צפה בשירותים שלנו
                        </motion.a>
                    </motion.div>

                    <div className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-right">
                        <div className="flex flex-col items-center sm:items-start gap-2">
                            <div className="p-2 bg-gray-50 rounded-lg text-gray-900">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">הגעה מהירה</h3>
                                <p className="text-sm text-gray-500">תוך 60 דקות באזור השרון</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center sm:items-start gap-2">
                            <div className="p-2 bg-gray-50 rounded-lg text-gray-900">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">זמינות מלאה</h3>
                                <p className="text-sm text-gray-500">שירות 24/7 גם בחגים</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center sm:items-start gap-2">
                            <div className="p-2 bg-gray-50 rounded-lg text-gray-900">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">אחריות מלאה</h3>
                                <p className="text-sm text-gray-500">על כל עבודת אינסטלציה</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="absolute -top-[20%] right-[10%] w-[40rem] h-[40rem] bg-brand-lime/10 blur-[100px] rounded-full mix-blend-multiply pointer-events-none"></div>
            <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-blue-50 blur-[100px] rounded-full mix-blend-multiply pointer-events-none"></div>
        </section>
    );
};
