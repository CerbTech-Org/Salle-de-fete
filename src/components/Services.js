import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const servicesData = [
  {
    title: "Aménagement et Décoration Personnalisée",
    description:
      "Nous offrons la possibilité de personnaliser entièrement la décoration de la salle selon le thème de votre évènement. Nos partenaires décorateurs peuvent vous accompagner pour créer l'ambiance que vous souhaitez.",
    image: require('../assets/Party.jpeg'),
  },
  {
    title: "Services Audiovisuels",
    description:
      "Notre salle n’étant pas équipée d’un système de sonorisation, nous pouvons vous mettre en relation avec nos prestataires afin de répondre aux besoins techniques de vos conférences, mariages, ou autres réceptions.",
    image: require('../assets/DJ.jpeg'),
  },
  {
    title: "Services Traiteur",
    description:
      "Nous travaillons avec des traiteurs de confiance qui pourront vous proposer divers types de menus : buffets, repas assis, ou cocktails dinatoires, en fonction de vos préférences.",
    image: require('../assets/Cooks.jpeg'),
  },
  {
    title: "Sécurité",
    description:
      "Nous mettons à disposition des agents de sécurité pour assurer le bon déroulement de votre événement, en particulier pour les grands rassemblements.",
    image: require('../assets/Security.jpeg'),
  },
  {
    title: "Parking et Commodités",
    description:
      "Nous offrons un grand espace de stationnement et des installations pratiques, telles qu'une connexion Wi-Fi, des vestiaires, et un espace dédié pour les enfants.",
    image: require('../assets/Parking.jpeg'),
  },
  {
    title: "Mobilier et Accessoires",
    description:
      "Notre salle est équipée de tout le mobilier nécessaire (tables, chaises, podiums, etc.), avec des options de location supplémentaires pour des éléments spécifiques comme des photobooths ou des tentes.",
    image: require('../assets/Chair.jpeg'),
  },
  {
    title: "Hébergement À Proximité",
    description:
      "Nous pouvons également vous recommander des hôtels et hébergements proches de notre salle pour vos invités venant de loin.",
    image: require('../assets/Hotel.jpeg'),
  },
  {
    title: "Espace Modulable",
    description:
      "Nos espaces peuvent être réaménagés pour accueillir aussi bien des petits événements intimes que des grandes réceptions, selon vos besoins.",
    image: require('../assets/hall.jpeg'),
  },
];

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section id="services" className="bg-gradient-to-b from-yellow-400 to-yellow-300 py-20 px-4">
      <h2 className="text-center text-4xl font-bold text-black mb-12">SERVICES</h2>

      <Carousel
          className="carousel-container" 
          responsive={responsive} 
          infinite={false}
          containerClass="pb-8 max-w-screen-lg mx-auto"
      >
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-[250px] bg-white bg-opacity-60 p-4 flex flex-col justify-between mx-auto"
            style={{ borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '350px' }}
          >
            <div className="h-32 bg-gray-300 overflow-hidden mb-4"
                 style={{ width: '110px', margin: '0 auto', borderRadius: '20%' }}>
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-bold text-black mb-1 text-center" style={{fontSize: '17px', marginTop: '15px'}}>
              {service.title}
            </h3>
            <p className="text-black text-center mt-2" style={{fontSize: '13px'}}>
              {service.description}
            </p>
          </div>
        ))}
      </Carousel>

      <div className="flex flex-col md:flex-row justify-center items-center mt-16 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 h-64 mb-6 md:mb-0 md:mr-8">
          <img
            src={require('../assets/gift.jpeg')}
            alt="Forfait tout-compris"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Nous vous proposons également un FORFAIT TOUT-COMPRIS !
          </h3>
          <p className="text-sm text-black mb-6">
            Pour simplifier l'organisation de votre événement, nous vous proposons des FORFAITS clé en main, incluant la location de la salle, la décoration, le service traiteur, et l'équipement technique.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-900">
            Réservez maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

