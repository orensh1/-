import React from 'react';
import { CheckCircle2, Clock, ThumbsUp, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Clock,
        title: 'זמינות מיידית',
        description: 'אנחנו מבינים שבעיות אינסטלציה לא סובלות דיחוי. הצוות שלנו ערוך לקריאות דחופות 24/7.'
    },
    {
        icon: Wrench,
        title: 'ציוד מתקדם',
        description: 'שימוש במצלמות תרמיות, סיבים אופטיים וציוד אל-הרס לפתרון מדויק ונקי של הבעיה.'
    },
    {
        icon: ThumbsUp,
        title: 'שקיפות ומחיר הוגן',
        description: 'הצעת מחיר מסודרת לפני תחילת העבודה, ללא הפתעות וללא אותיות קטנות.'
    },
    {
        icon: CheckCircle2,
        title: 'אחריות מלאה',
        description: 'אנחנו עומדים מאחורי העבודה שלנו. כל תיקון מגיע עם תעודת אחריות מלאה בכתב.'
    }
];

export const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 p-32 bg-brand-lime/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 p-40 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-3xl lg:text-4xl font-bold mb-6"
                        >
                            למה לבחור ב<span className="text-brand-lime">שרון אינסטלציה?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            className="text-gray-400 text-lg mb-8 leading-relaxed"
                        >
                            עם ניסיון של מעל 15 שנה ואלפי לקוחות מרוצים, אנחנו מביאים סטנדרט חדש של שירות ואמינות לעולם האינסטלציה.
                        </motion.p>

                        <div className="space-y-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center border border-gray-700">
                                                <Icon className="w-5 h-5 text-brand-lime" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-800 ring-1 ring-white/10"
                    >
                        {/* Abstract visual representation instead of generic stock photo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 border-2 border-brand-lime/20 rounded-full animate-spin-slow"></div>
                                <div className="absolute inset-4 border-2 border-brand-lime/40 rounded-full animate-reverse-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Wrench className="w-24 h-24 text-brand-lime opacity-80" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4 space-x-reverse">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-xs text-white font-medium">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="font-bold text-white">4.9/5 דירוג לקוחות</div>
                                    <div className="text-sm text-gray-400">מבוסס על 500+ ביקורות בגוגל</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
