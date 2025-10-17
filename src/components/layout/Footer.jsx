import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Maroautos.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
export function Footer() {
    
    const links = [
        { title: "Compañía", items: [
            { name: "Sobre Nosotros", href: "/nosotros" },
            { name: "Contáctanos", href: "/contacto" },
            { name: "Testimonios", href: "/testimonios" },
        ]},
        { title: "Servicios", items: [
            { name: "Vender mi auto", href: "/vender" },
            { name: "Financiamiento", href: "/financiamiento" },
            { name: "Mantenimiento", href: "/mantenimiento" },
        ]},
        { title: "Legal", items: [
            { name: "Términos y Condiciones", href: "/terminos" },
            { name: "Política de Privacidad", href: "/privacidad" },
            { name: "Cookies", href: "/cookies" },
        ]},
    ];
    
    return (
        <footer className="bg-neutral-900 dark:bg-black text-white py-12 border-t border-neutral-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    
                    <div className="col-span-2 md:col-span-2">
                        <img 
            src={logo} 
            alt="MAROS AUTOSALES Logo" 
            className=" h-20 w-auto"
        />
                        <p className="mt-4 text-sm text-neutral-400 max-w-sm">
                            Tu socio confiable para vehículos de lujo y alto rendimiento. Calidad y servicio excepcional desde 2023.
                        </p>
                        <div className="mt-4 flex items-center space-x-3">
                            <a
                                href="https://facebook.com/tuPagina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-neutral-800 hover:bg-blue-600 transition-colors text-white"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a
                                href="https://instagram.com/tuPagina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-neutral-800 hover:bg-pink-500 transition-colors text-white"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://twitter.com/tuPagina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-neutral-800 hover:bg-sky-500 transition-colors text-white"
                                aria-label="Twitter"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {links.map((section, index) => (
                        <div key={index} className="col-span-1">
                            <h3 className="text-lg font-semibold mb-4 text-neutral-200">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.items.map((item, i) => (
                                    <li key={i}>
                                        <Link 
                                            to={item.href} 
                                            className="text-sm text-neutral-400 hover:text-blue-500 transition duration-150"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    
                </div>
                
                <div className="mt-8 border-t border-neutral-700 pt-8 text-center">
                    <p className="text-sm text-neutral-500">
                        &copy; {new Date().getFullYear()} MAROS AUTOSALES. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}