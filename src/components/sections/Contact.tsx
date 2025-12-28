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
                        className="md:col-span-1 md:col-start-2 bg-[#25D366] rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            {/* SVG Background Icon */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold">WhatsApp</h3>
                            <p className="text-green-50 font-medium">Resposta mais rápida</p>
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
