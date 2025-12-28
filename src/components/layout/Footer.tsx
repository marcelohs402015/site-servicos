import Link from "next/link";
import { COMPANY_INFO, NAV_LINKS } from "@/data/content";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="text-secondary">⚡</span> {COMPANY_INFO.name}
                        </Link>
                        <p className="max-w-sm">
                            {COMPANY_INFO.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Navegação</h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-secondary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Contato</h4>
                        <ul className="space-y-2">
                            <li>{COMPANY_INFO.contact.whatsappDisplay}</li>
                            <li>{COMPANY_INFO.contact.email}</li>
                            <li>{COMPANY_INFO.contact.address}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
                    <p>Desenvolvido com tecnologia de ponta.</p>
                </div>
            </div>
        </footer>
    );
}
