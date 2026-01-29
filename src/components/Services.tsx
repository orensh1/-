import React from 'react';
import { Droplets, Wrench, Search, Construction, Thermometer, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import serviceLeak from '../assets/images/service_leak.png';
import serviceClog from '../assets/images/service_clog.png';
import servicePressure from '../assets/images/service_pressure.png';
import servicePipe from '../assets/images/service_pipe.png';
import serviceHeater from '../assets/images/service_heater.png';
import serviceInspection from '../assets/images/service_inspection.png';

const services = [
    {
        id: 1,
        title: 'איתור נזילות',
        description: 'גילוי מוקד הנזילה באמצעות מצלמה תרמית וגז ללא הרס מיותר',
        icon: Search,
        image: serviceLeak,
    },
    {
        id: 2,
        title: 'פתיחת סתימות',
        description: 'שימוש בציוד מתקדם לשחרור סתימות מורכבות בבית ובחצר',
        icon: Wrench,
        image: serviceClog,
    },
    {
        id: 3,
        title: 'הגברת לחץ מים',
        description: 'פתרונות לזרימת מים חלשה, ניקוי אבנית ושדרוג משאבות',
        icon: Droplets,
        image: servicePressure,
    },
    {
        id: 4,
        title: 'תיקון צנרת',
        description: 'החלפה ותיקון של צנרת ישנה, טיפול בפיצוצי צנרת חירום',
        icon: Construction,
        image: servicePipe,
    },
    {
        id: 5,
        title: 'דודי שמש וחשמל',
        description: 'התקנה ותיקון של דודים, החלפת גופי חימום ופלאנג׳ים',
        icon: Thermometer,
        image: serviceHeater,
    },
    {
        id: 6,
        title: 'בדק בית',
        description: 'בדיקה מקיפה למערכות האינסטלציה לפני כניסה לדירה חדשה',
        icon: Shield,
        image: serviceInspection,
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
                                className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-brand-lime/10 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 right-4 z-20">
                                        <div className="w-10 h-10 bg-brand-lime rounded-lg flex items-center justify-center shadow-lg">
                                            <Icon className="w-5 h-5 text-brand-dark" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed flex-1">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
