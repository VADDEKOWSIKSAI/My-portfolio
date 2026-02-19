import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("submitting");

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            }, (error) => {
                console.error(error.text);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            });
    };

    return (
        <section id="contact" className="min-h-screen py-24 bg-midnight border-t border-border-glow relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent-primary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-mono text-accent-primary mb-2 uppercase tracking-widest">04. What's Next?</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">Get In Touch</h3>
                    <p className="text-text-muted max-w-2xl mx-auto text-lg">
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start space-x-4 group">
                            <div className="bg-surface p-4 rounded-xl text-accent-primary text-2xl border border-border-glow group-hover:bg-accent-primary group-hover:text-midnight transition-colors duration-300">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-text-primary mb-1">Email</h4>
                                <a href="mailto:vaddekowsiksai@example.com" className="text-text-muted hover:text-accent-primary transition-colors">
                                    vaddekowsiksai@example.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 group">
                            <div className="bg-surface p-4 rounded-xl text-accent-primary text-2xl border border-border-glow group-hover:bg-accent-primary group-hover:text-midnight transition-colors duration-300">
                                <FaLinkedin />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-text-primary mb-1">LinkedIn</h4>
                                <a href="https://linkedin.com/in/vaddekowsiksai" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-primary transition-colors">
                                    linkedin.com/in/vaddekowsiksai
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 group">
                            <div className="bg-surface p-4 rounded-xl text-accent-primary text-2xl border border-border-glow group-hover:bg-accent-primary group-hover:text-midnight transition-colors duration-300">
                                <FaGithub />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-text-primary mb-1">GitHub</h4>
                                <a href="https://github.com/vaddekowsiksai" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-primary transition-colors">
                                    github.com/vaddekowsiksai
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 group">
                            <div className="bg-surface p-4 rounded-xl text-accent-primary text-2xl border border-border-glow group-hover:bg-accent-primary group-hover:text-midnight transition-colors duration-300">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-text-primary mb-1">Location</h4>
                                <p className="text-text-muted">
                                    India
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-surface/50 backdrop-blur-sm p-8 rounded-2xl border border-border-glow shadow-2xl relative"
                    >
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-midnight/50 border border-border-glow rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-midnight/50 border border-border-glow rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-midnight/50 border border-border-glow rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className={`w-full font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center space-x-2
                                    ${status === "success"
                                        ? "bg-green-500 text-white"
                                        : "bg-accent-primary text-midnight hover:bg-accent-primary/80 hover:scale-[1.02]"
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {status === "submitting" ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : status === "success" ? (
                                    <span>Message Sent!</span>
                                ) : status === "error" ? (
                                    <span>Failed. Try Again?</span>
                                ) : (
                                    <span>Send Message</span>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
