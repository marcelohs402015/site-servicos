"use client";

import { CheckCircle2, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/content";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function About() {
    return (
        <section id="sobre" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 order-2 lg:order-1"
                    >
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-blue-100 rounded-3xl transform -rotate-3 z-0"></div>
                            <div className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-2xl transform rotate-0">
                                <img
                                    src="/imagens/nossa-missao.png"
                                    alt="Nossa Missão"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-8 bg-gray-900 text-white">
                                    <h3 className="text-2xl font-bold text-secondary mb-2">Sobre o Profissional</h3>
                                    <p className="font-light text-gray-300 italic">
                                        "Compromisso com cada projeto, garantindo segurança e a melhor técnica para sua obra."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 order-1 lg:order-2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Mestre de Obras e Especialista <br /> em <span className="text-primary">Manutenção Predial</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {COMPANY_INFO.description} Atuamos com uma equipe preparada para resolver problemas complexos com soluções simples e eficazes.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Orçamentos transparentes sem surpresas",
                                "Pontualidade e limpeza na obra",
                                "Materiais de alta qualidade",
                                "Garantia nos serviços prestados"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>


                    </motion.div>

                </div>
            </div>
        </section>
    );
}
