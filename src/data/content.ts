import { Droplets, Bug, Shield, Wrench, PaintRoller, Hammer, Phone, Mail, MessageCircle } from "lucide-react";

export const COMPANY_INFO = {
    name: "Mestre da Obra & Serviços",
    tagline: "Qualidade e Confiança em cada detalhe",
    description: "Especialista em manutenção predial, construção civil e serviços essenciais para sua casa ou empresa. Comprometimento com prazos e excelência na execução.",
    contact: {
        whatsapp: "5515988118508", // Gabriel Martinho
        whatsappDisplay: "Gabriel: (15) 98811-8508",
        phone: "Gilson: (15) 98818-4061",
        email: "gabriel769zmartinho@gmail.com", // Mantendo email genérico ou remover se não houver
        address: "Sorocaba e Região, SP" // Assumindo região baseado no DDD 15
    }
};

export const SERVICES = [
    {
        id: "limpeza-caixa-dagua",
        title: "Limpeza de Caixa d'Água",
        description: "Higienização completa com desinfecção, garantindo água potável e saúde para sua família. Remoção de lodo e impurezas conforme normas da ANVISA.",
        icon: Droplets,
    },
    {
        id: "dedetizacao",
        title: "Dedetização",
        description: "Controle eficaz de pragas urbanas como baratas, ratos e formigas. Produtos seguros e aplicação técnica para proteger seu ambiente.",
        icon: Bug,
    },
    {
        id: "impermeabilizacao",
        title: "Impermeabilização",
        description: "Soluções definitivas para infiltrações em lajes, telhados, paredes e piscinas. Valorize seu imóvel e evite danos estruturais.",
        icon: Shield,
    },
    {
        id: "desentopimento",
        title: "Desentopimento",
        description: "Desobstrução rápida de pias, ralos, vasos sanitários e redes de esgoto. Equipamentos modernos que não quebram pisos ou paredes.",
        icon: Wrench,
    },
    {
        id: "pintura",
        title: "Pintura",
        description: "Pintura residencial e comercial de alto padrão. Preparação de superfícies, massas, texturas e acabamentos finos.",
        icon: PaintRoller,
    },
    {
        id: "construcao",
        title: "Construção e Reformas",
        description: "Serviços gerais de pedreiro, alvenaria, pisos, revestimentos, elétrica e hidráulica. Do pequeno reparo à grande reforma.",
        icon: Hammer,
    },
];

export const NAV_LINKS = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
];
