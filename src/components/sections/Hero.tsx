"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/content";
import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white">
            {/* Abstract Shapes/Background */}
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-400 blur-3xl mix-blend-overlay"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-secondary blur-3xl mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="flex-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-700/50 border border-blue-500/30 text-blue-100 text-sm font-medium mb-4">
                                {COMPANY_INFO.tagline}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                                Soluções Completas para <span className="text-secondary">Construção</span> e <span className="text-blue-200">Manutenção</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-blue-100 max-w-2xl"
                        >
                            Profissionais qualificados para Limpeza de Caixa d'Água, Dedetização, Pintura, Reformas e muito mais. Atendimento rápido e garantido.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
                        >
                            <Button size="lg" variant="secondary" className="gap-2" asChild>
                                <Link href={COMPANY_INFO.contact.whatsapp} target="_blank">
                                    Solicitar Orçamento <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800 hover:text-white" asChild>
                                <Link href="#servicos">
                                    Ver Nossos Serviços
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="pt-8 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-blue-200"
                        >
                            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-secondary" /> Orçamento sem compromisso</span>
                            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-secondary" /> Profissionais Segurados</span>
                            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-secondary" /> Atendimento 24h</span>
                        </motion.div>
                    </div>

                    <div className="flex-1 hidden md:block relative">
                        <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="/imagens/sua-melhor-escolha.png"
                                alt="Sua Melhor Escolha"
                                className="w-full h-auto block"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
