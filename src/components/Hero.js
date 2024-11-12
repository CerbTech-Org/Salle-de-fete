// import React from 'react';
// import womanWithGlass from '../assets/woman_with_glass.png';
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section id="accueil" className="bg-gradient-to-b from-yellow-400 to-yellow-300 flex min-h-screen items-center justify-center py-20 px-4">
//       <div className="bg-white bg-opacity-50 p-16 rounded-md shadow-lg flex flex-col md:flex-row items-center md:justify-between max-w-5xl w-full" style={{ borderRadius: '16px', marginTop: '40px' }}>
        
//         {/* Image en premier sur mobile */}
//         <div className="flex justify-center mb-6 md:mb-0 md:mr-8">
//           <img src={womanWithGlass} alt="Femme avec verre" className="w-64 md:w-96 rounded-md" />
//         </div>

//         <div className="flex flex-col items-center md:items-start max-w-md px-4 md:px-8">
//           <motion.h1
//             className="text-2xl md:text-5xl font-bold text-black mb-4 md:mb-6"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Transformons votre événement en un souvenir mémorable.
//           </motion.h1>
//           <motion.p
//             className="text-black text-sm md:text-base mb-4 md:mb-6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Nous disposons d'une salle polyvalente pour accueillir vos anniversaires, mariages, baptêmes, et bien plus, le tout avec une capacité équivalente à 200 places. Nous disposons également d'un parking pouvant contenir jusqu'à 25 véhicules en moyenne.
//           </motion.p>
//           <motion.button
//             className="bg-black text-white px-6 py-2 md:py-3 rounded-md shadow-md hover:bg-gray-900"
//             style={{ borderRadius: '14px' }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             Réservez-maintenant
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// export default Hero;

// import React from 'react';
// import womanWithGlass from '../assets/woman_with_glass.png';
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section id="accueil" className="bg-gradient-to-b from-yellow-400 to-yellow-300 flex min-h-screen items-center justify-center py-20 px-4">
//       <div className="bg-white bg-opacity-50 p-16 md:p-16 rounded-md shadow-lg flex flex-col md:flex-row items-center md:justify-between max-w-5xl w-full" style={{ borderRadius: '16px', paddingRight: '90px', marginTop: '40px' }}>
//         <div className="max-w-md px-4 md:px-8">
//           <motion.h1
//             className="text-2xl md:text-5xl font-bold text-black mb-4 md:mb-6"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Transformons votre événement en un souvenir mémorable.
//           </motion.h1>
//           <motion.p
//             className="text-black text-sm md:text-base mb-4 md:mb-6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Nous disposons d'une salle polyvalente pour accueillir vos anniversaires, mariages, baptêmes, et bien plus, le tout avec une capacité équivalente à 200 places. Nous disposons également d'un parking pouvant contenir jusqu'à 25 véhicules en moyenne.
//           </motion.p>
//           <motion.button
//             className="bg-black text-white px-6 py-2 md:py-3 rounded-md shadow-md hover:bg-gray-900"
//             style={{ borderRadius: '14px' }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             Réservez-maintenant
//           </motion.button>
//         </div>
//         <div className="mt-6 md:mt-0 ml-0 md:ml-8">
//           <img src={womanWithGlass} alt="Femme avec verre" className="w-64 md:w-96 rounded-md" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import womanWithGlass from '../assets/woman_with_glass.png';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="accueil" className="bg-gradient-to-b from-yellow-400 to-yellow-300 flex min-h-screen items-center justify-center py-20 px-4">
      <div className="bg-white bg-opacity-50 p-16 rounded-md shadow-lg flex flex-col md:flex-row items-center md:justify-between max-w-5xl w-full" style={{ borderRadius: '16px', marginTop: '40px' }}>
        
        {/* Image à droite sur les écrans plus grands */}
        <div className="flex flex-col-reverse md:flex-row justify-center mb-6 md:mb-0 md:ml-8">
          <div className="flex flex-col items-center md:items-start max-w-md px-4 md:px-8">
            <motion.h1
              className="text-2xl md:text-5xl font-bold text-black mb-4 md:mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transformons votre événement en un souvenir mémorable.
            </motion.h1>
            <motion.p
              className="text-black text-sm md:text-base mb-4 md:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Nous disposons d'une salle polyvalente pour accueillir vos anniversaires, mariages, baptêmes, et bien plus, le tout avec une capacité équivalente à 200 places. Nous disposons également d'un parking pouvant contenir jusqu'à 25 véhicules en moyenne.
            </motion.p>
            <motion.button
              className="bg-black text-white px-6 py-2 md:py-3 rounded-md shadow-md hover:bg-gray-900"
              style={{ borderRadius: '14px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=22990401041', '_blank')}
            >
              Réservez-maintenant
            </motion.button>
          </div>
          {/* <div className="flex justify-center mb-6 md:mb-0"> */}
          <div className="flex justify-center mb-6 md:mb-0 md:mr-8">
            <img src={womanWithGlass} alt="Femme avec verre" className="w-64 md:w-96 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;