"use client";

import { SERVICES } from "@/data/content";
import { motion } from "framer-motion";

export function Services() {
    return (
        <section id="servicos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
                    <p className="text-lg text-gray-600">
                        Oferecemos uma gama completa de serviços especializados para manter sua casa ou comércio em perfeito funcionamento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-lg border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all overflow-hidden"
                            >
                                {service.image ? (
                                    <div className="relative w-full bg-gray-900 border-b border-gray-100">
                                        {/* Using object-contain so the whole image is visible without cropping, or remove height restriction if aspect ratio varies */}
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                ) : (
                                    <div className="p-8 pb-0">
                                        <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-primary">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                    </div>
                                )}


                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
