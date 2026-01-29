import React from 'react';
import { Droplets, Wrench, Search, Construction, Thermometer, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        id: 1,
        title: 'איתור נזילות',
        description: 'גילוי מוקד הנזילה באמצעות מצלמה תרמית וגז ללא הרס מיותר',
        icon: Search,
    },
    {
        id: 2,
        title: 'פתיחת סתימות',
        description: 'שימוש בציוד מתקדם לשחרור סתימות מורכבות בבית ובחצר',
        icon: Wrench,
    },
    {
        id: 3,
        title: 'הגברת לחץ מים',
        description: 'פתרונות לזרימת מים חלשה, ניקוי אבנית ושדרוג משאבות',
        icon: Droplets,
    },
    {
        id: 4,
        title: 'תיקון צנרת',
        description: 'החלפה ותיקון של צנרת ישנה, טיפול בפיצוצי צנרת חירום',
        icon: Construction,
    },
    {
        id: 5,
        title: 'דודי שמש וחשמל',
        description: 'התקנה ותיקון של דודים, החלפת גופי חימום ופלאנג׳ים',
        icon: Thermometer,
    },
    {
        id: 6,
        title: 'בדק בית',
        description: 'בדיקה מקיפה למערכות האינסטלציה לפני כניסה לדירה חדשה',
        icon: Shield,
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        מגוון שירותי אינסטלציה
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        אנחנו מציעים פתרון מלא לכל בעיות האינסטלציה, מקטן ועד גדול, עם ציוד חדשני וצוות מיומן
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-lime/50 hover:shadow-xl hover:shadow-brand-lime/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-lime">
                                    <Icon className="w-6 h-6 text-gray-700 group-hover:text-brand-dark transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
