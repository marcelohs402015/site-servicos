import { Droplets, Bug, Shield, Wrench, PaintRoller, Hammer, Phone, Mail, MessageCircle } from "lucide-react";

export const COMPANY_INFO = {
    name: "Prediais Serviços",
    tagline: "Qualidade e Confiança em cada detalhe",
    description: "Especialista em manutenção predial, construção civil e serviços essenciais para sua casa ou empresa. Comprometimento com prazos e excelência na execução.",
    contact: {
        whatsapp: "https://wa.me/5515988118508", // Link direto para o chat
        whatsappDisplay: "Gabriel: (15) 99136-6816",
        phone: "Gilson: (15) 98818-4061",
        email: "prediaisservicos@gmail.com", // Mantendo email genérico ou remover se não houver
        address: "Sorocaba e Região, SP" // Assumindo região baseado no DDD 15
    }
};

export const SERVICES = [
    {
        id: "limpeza-caixa-dagua",
        title: "Limpeza de Caixa d'Água",
        description: "Higienização completa com desinfecção, garantindo água potável e saúde para sua família. Remoção de lodo e impurezas conforme normas da ANVISA.",
        icon: Droplets,
        image: "/imagens/servicos-de-controle-e-higienização.png"
    },
    {
        id: "dedetizacao",
        title: "Dedetização",
        description: "Controle eficaz de pragas urbanas como baratas, ratos e formigas. Produtos seguros e aplicação técnica para proteger seu ambiente.",
        icon: Bug,
        image: "/imagens/servicos-de-controle-e-higienização.png"
    },
    {
        id: "impermeabilizacao",
        title: "Impermeabilização",
        description: "Soluções definitivas para infiltrações em lajes, telhados, paredes e piscinas. Valorize seu imóvel e evite danos estruturais.",
        icon: Shield,
        image: "/imagens/servicos-de-manutenção.png"
    },
    {
        id: "desentopimento",
        title: "Desentopimento",
        description: "Desobstrução rápida de pias, ralos, vasos sanitários e redes de esgoto. Equipamentos modernos que não quebram pisos ou paredes.",
        icon: Wrench,
        image: "/imagens/servicos-de-manutenção.png"
    },
    {
        id: "pintura",
        title: "Pintura",
        description: "Pintura residencial e comercial de alto padrão. Preparação de superfícies, massas, texturas e acabamentos finos.",
        icon: PaintRoller,
        image: "/imagens/servicos-de-manutenção.png"
    },
    {
        id: "construcao",
        title: "Construção e Reformas",
        description: "Serviços gerais de pedreiro, alvenaria, pisos, revestimentos, elétrica e hidráulica. Do pequeno reparo à grande reforma.",
        icon: Hammer,
        image: "/imagens/servicos-de-manutenção.png"
    },
];

export const NAV_LINKS = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
];
