import React from "react";
import logo from '../assets/noir2.png';

const Footer = () => {
    return (
        <footer className="bg-yellow-300 py-8 px-4 md:px-0">
            <div className="container mx-auto px-4">
                <hr className="my-4 border-black" />
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex flex-col items-center md:items-start">
                        <a href="home.html">
                            <img src={logo} alt="logo" className="" />
                        </a>
                        <p className="text-xl font-bold font-sans">espacefaaji@gmail.com</p>
                        <p className="text-xl font-bold font-sans">+229 90401041</p>
                    </div>
                </div>
                <div className="flex space-y-2 mt-8 md:mt-1 items-end justify-center">
                <button
                        className="bg-black text-white semi-bold px-7 py-2 rounded-full"
                        onClick={() => window.open('https://api.whatsapp.com/send/?phone=22990401041', '_blank')}
                    >Réservez maintenant</button>
                </div>
                <hr className="my-4 border-black" />
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <p>© 2024 Espace Faaji</p>
                </div>
                <div className="flex space-x-4 mt-0 md:mt-0 items-end justify-end">
                <button
                        className="text-black text-2xl transform hover:scale-110 transition-transform duration-300"
                        onClick={() => window.open('https://www.instagram.com/', '_blank')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    </button>
                    <button
                        className="text-black text-2xl transform hover:scale-110 transition-transform duration-300"
                        onClick={() => window.open('https://www.facebook.com/', '_blank')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>

                    </button>
                    <button
                        className="text-black text-2xl transform hover:scale-110 transition-transform duration-300"
                        onClick={() => window.open('https://www.linkedin.com/', '_blank')}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-5 w-5"
                    >
                        {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                        <path
                        fill="currentColor"
                        d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                        />
                    </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;