import React from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
    return (
        <footer id="contact" className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">שרון אינסטלציה</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            שירותי אינסטלציה מתקדמים באזור השרון והמרכז. זמינות 24/7, מקצועיות ללא פשרות ומחירים הוגנים.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-gray-900">שירותים</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-600 hover:text-brand-dark transition-colors">איתור נזילות</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-brand-dark transition-colors">פתיחת סתימות</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-brand-dark transition-colors">תיקון צנרת</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-brand-dark transition-colors">הגברת לחץ מים</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-gray-900">אזורי שירות</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-600">הרצליה ורמת השרון</li>
                            <li className="text-gray-600">רעננה וכפר סבא</li>
                            <li className="text-gray-600">הוד השרון והסביבה</li>
                            <li className="text-gray-600">נתניה ויישובי העמק</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-gray-900">פרטי התקשרות</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+972524580590" className="flex items-center gap-3 text-gray-600 hover:text-brand-dark transition-colors">
                                    <Phone className="w-5 h-5 text-brand-lime" />
                                    <span className="font-medium">052-4580590</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <MapPin className="w-5 h-5 text-brand-lime" />
                                    <span>הגפן 12, הוד השרון</span>
                                </div>
                            </li>
                            <li>
                                <a href="mailto:info@sharon-plumbing.co.il" className="flex items-center gap-3 text-gray-600 hover:text-brand-dark transition-colors">
                                    <Mail className="w-5 h-5 text-brand-lime" />
                                    <span>info@sharon-plumbing.co.il</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 שרון אינסטלציה. כל הזכויות שמורות.</p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors group"
                    >
                        <ArrowUp className="w-5 h-5 text-gray-600 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};
