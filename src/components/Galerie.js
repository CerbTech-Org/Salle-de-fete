// import React from 'react';

// const Galerie = () => {
//   return (
//     <section id="galerie" className="bg-gradient-to-b from-yellow-400 to-yellow-300 p-10 min-h-screen">
//       <h2 className="text-center text-3xl font-bold text-black mb-8">Galerie</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         <div className="bg-white bg-opacity-60 h-40 rounded-md"></div>
//         <div className="bg-white bg-opacity-60 h-40 rounded-md"></div>
//         <div className="bg-white bg-opacity-60 h-40 rounded-md"></div>
//         <div className="bg-white bg-opacity-60 h-40 rounded-md"></div>
//         <div className="bg-white bg-opacity-60 h-40 rounded-md"></div>
//         <div className="bg-white bg-opacity-60 h-40 rounded-md"></div>
//       </div>
//     </section>
//   );
// };

// export default Galerie;

import React from 'react';

const Galerie = () => {
  return (
    <section id="galerie" className="bg-gradient-to-b from-yellow-400 to-yellow-300 p-6 md:p-10 min-h-screen">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">Galerie</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-60 h-32 md:h-40 rounded-md"></div>
        <div className="bg-white bg-opacity-60 h-32 md:h-40 rounded-md"></div>
        <div className="bg-white bg-opacity-60 h-32 md:h-40 rounded-md"></div>
        <div className="bg-white bg-opacity-60 h-32 md:h-40 rounded-md"></div>
        <div className="bg-white bg-opacity-60 h-32 md:h-40 rounded-md"></div>
        <div className="bg-white bg-opacity-60 h-32 md:h-40 rounded-md"></div>
      </div>
    </section>
  );
};

export default Galerie;
