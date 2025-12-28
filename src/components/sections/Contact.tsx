"use client";

import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/data/content";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contato" className="py-20 bg-blue-900 text-white relative overflow-hidden">
            {/* Decorator */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
                    <p className="text-xl text-blue-100">
                        Pronto para começar? Fale conosco hoje mesmo e agende uma visita ou orçamento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* WhatsApp Card - Featured */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="md:col-span-1 md:col-start-2 bg-secondary rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <MessageCircle className="w-24 h-24 text-white" />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                                <MessageCircle className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">WhatsApp</h3>
                            <p className="text-orange-100 font-medium">Resposta mais rápida</p>
                            <div className="py-4">
                                <p className="text-3xl font-bold tracking-tight">{COMPANY_INFO.contact.whatsappDisplay}</p>
                            </div>
                            <Button className="w-full bg-white text-secondary hover:bg-gray-100 font-bold" size="lg" asChild>
                                <Link href={COMPANY_INFO.contact.whatsapp} target="_blank">
                                    Chamar Agora
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Other Contacts */}
                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-0 md:hidden">
                        {/* This block is only for mobile if needed, or usually we list all contact methods clearly. 
                   Let's actually put Email and Phone below or side-by-side if on desktop?
                   Let's redesign: grid-cols-1 md:grid-cols-3 is good if we have 3 cards. 
                   We have WA, Email, Phone.
                   Let's do 3 columns.
               */}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 flex flex-col items-center text-center"
                    >
                        <Phone className="w-10 h-10 text-blue-300 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Telefone</h3>
                        <p className="text-gray-300 mb-4">Atendimento em horário comercial</p>
                        <Link href={`tel:${COMPANY_INFO.contact.phone.replace(/\D/g, '')}`} className="text-2xl font-bold hover:text-secondary transition-colors">
                            {COMPANY_INFO.contact.phone}
                        </Link>
                    </motion.div>

                    {/* Email */}
                    <Link href={`mailto:${COMPANY_INFO.contact.email}`} className="block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 flex flex-col items-center text-center h-full cursor-pointer transition-colors"
                        >
                            <Mail className="w-10 h-10 text-blue-300 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-300 mb-4">Para solicitações e parcerias</p>
                            <span className="text-lg font-bold hover:text-secondary transition-colors break-all">
                                {COMPANY_INFO.contact.email}
                            </span>
                        </motion.div>
                    </Link>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 flex flex-col items-center text-center"
                    >
                        <MapPin className="w-10 h-10 text-blue-300 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Região de Atendimento</h3>
                        <p className="text-gray-300 mb-2">Atendemos em toda região de</p>
                        <p className="text-xl font-bold">{COMPANY_INFO.contact.address}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
