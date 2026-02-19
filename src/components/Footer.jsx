import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TextHoverEffect } from "../components/ui/text-hover-effect";

const Footer = () => {
    return (
        <footer className="bg-midnight py-8 text-center text-text-muted border-t border-border-glow">
            <div className="container mx-auto px-6">

                <div className="h-[10rem] flex items-center justify-center">
                    <TextHoverEffect text="VADDE KOWSIK SAI" />
                </div>

                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/vaddekowsiksai" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent-primary transition-colors">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/vaddekowsiksai" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:contact@example.com" className="text-2xl hover:text-accent-secondary transition-colors">
                        <FaEnvelope />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Vadde Kowsik Sai. Built with React & Tailwind.</p>
            </div>
        </footer>
    );
};

export default Footer;
