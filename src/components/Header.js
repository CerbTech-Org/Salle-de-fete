// import React from 'react';
// import logo from '../assets/noir2.png';
// import { Link } from 'react-scroll';

// const Header = () => {
//   return (
//     <>
//       <div className="absolute top-6 left-16 z-50 bg-white pt-4 pl-4 pr-2 pb-2 rounded-full shadow-md flex items-center justify-center">
//         <img src={logo} alt="Espace Faaji" className="h-14 w-auto object-contain" />
//       </div>

//       <div className="absolute top-6 right-16 z-50">
//         <button className="bg-black text-white px-6 py-2 shadow-md hover:bg-gray-900" style={{ borderRadius: '16px' }}>
//           Réservation
//         </button>
//       </div>

//       <header className="fixed top-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 px-8 py-2 rounded-full shadow-lg z-40">
//         <nav className="flex space-x-8">
//           <Link to="accueil" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">Accueil</Link>
//           <Link to="galerie" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">Galerie</Link>
//           <Link to="services" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">Services</Link>
//           <Link to="contact" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">Contact</Link>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import logo from '../assets/noir2.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute top-4 left-6 z-50 flex items-center">
        <div className="bg-white pt-3 pl-3 pr-2 pb-2 rounded-full shadow-md flex items-center justify-center">
          <img src={logo} alt="Espace Faaji" className="h-10 w-auto object-contain" />
        </div>
      </div>

      <div className="absolute top-6 right-6 z-50 flex items-center">
        <button className="bg-black text-white px-4 py-2 shadow-md hover:bg-gray-900" style={{ borderRadius: '16px' }}>
          Réservation
        </button>
      </div>

      <header className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 px-8 py-2 rounded-full shadow-lg z-40">
        <nav className="hidden md:flex space-x-8">
          <Link to="accueil" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">Accueil</Link>
          <Link to="galerie" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">Galerie</Link>
          <Link to="services" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">Services</Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-yellow-400 cursor-pointer">Contact</Link>
        </nav>
        <div className="flex md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">☰</button>
          {menuOpen && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 p-4 rounded-md">
              <Link to="accueil" smooth={true} duration={500} className="block text-white hover:text-yellow-400 cursor-pointer mb-2">Accueil</Link>
              <Link to="galerie" smooth={true} duration={500} className="block text-white hover:text-yellow-400 cursor-pointer mb-2">Galerie</Link>
              <Link to="services" smooth={true} duration={500} className="block text-white hover:text-yellow-400 cursor-pointer mb-2">Services</Link>
              <Link to="contact" smooth={true} duration={500} className="block text-white hover:text-yellow-400 cursor-pointer">Contact</Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

