import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="bg-gradient-to-b from-yellow-400 to-yellow-300 py-4 px-4 md:px-0">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-95 p-8 rounded-lg shadow-lg mt-10">
                <div className="flex flex-col md:flex-row justify-between">
                    <motion.div
                        className="w-full md:w-1/2 mb-8 md:mb-0 space-y-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl font-bold">Contactez-nous</h2>
                        <p><strong>Espace Faaji</strong></p>
                        <p>Akpakpa-Minontchou,</p>
                        <p>2ème rue après la Pharmacie Deo-Gracias de Minontchou</p>
                        <p>Téléphone : +229 90401041</p>
                        <p>Email : espacefaaji@gmail.com</p>
                        <h3 className="font-semibold mt-4">Heures d'ouverture</h3>
                        <p>Lundi - Dimanche : 09h - 20h</p>
                        <div className="w-full h-40 bg-gray-300 mt-4 relative overflow-hidden">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0251992160806!2d2.4503261750756598!3d6.3907499246916135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235580fc5d49fb%3A0x4da6009af1987ef6!2sEspace%20Faadji!5e0!3m2!1sfr!2sbj!4v1729501488221!5m2!1sfr!2sbj"
                                title="Carte d'Espace Faaji"
                                style={{ border: '0', width: '100%', height: '100%' }}
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2 md:ml-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <a href="espacefaadji@gmail.com">
                            <h2 className="text-2xl font-bold">Envoyez-nous un message</h2>
                        </a>
                        <form className="space-y-4 mt-4">
                            <div>
                                <label className="block">Nom complet</label>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded"/>
                            </div>
                            <div>
                                <label className="block">Email</label>
                                <input type="email" className="w-full border border-gray-300 p-2 rounded"/>
                            </div>
                            <div>
                                <label className="block">Téléphone</label>
                                <input type="tel" className="w-full border border-gray-300 p-2 rounded"/>
                            </div>
                            <div>
                                <label className="block">Message</label>
                                <textarea className="w-full border border-gray-300 p-2 rounded h-24"></textarea>
                            </div>
                            <button type="submit" className="bg-black text-white px-4 py-2 rounded-full"
                            onClick={() => window.open('https://api.gmail.com/send/?email=espacefaaji@gmail.com', '_blank')}>Envoyer le message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
