import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import WorldMap from "./WorldMap";
import { useNavigate } from "react-router-dom";
import CountryModal from "./CountryModal"; // Import the new modal component

const TravelsPage = () => {
  const navigate = useNavigate();

  // State for the new country modal
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [countryModalContent, setCountryModalContent] = useState(null);

  // Function to handle a country click from the globe
  // Function to handle a country click from the globe
  const handleCountryClick = (countryData) => {
    // Find the matching travel data for the clicked country
    const clickedCountryData = travelsData.find(
      (travel) => travel.countryId === countryData.id,
    );
    if (clickedCountryData) {
      setCountryModalContent(clickedCountryData);
      setShowCountryModal(true);
    }
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowCountryModal(false);
    setCountryModalContent(null);
  };

  const travelsData = [
    {
      title: "Daytrip to Bangkok",
      description: `
    Explored the bustling streets of Bangkok, visited majestic temples. The highlight included the visit 
    of Jim Thompson House, a museum dedicated to the American businessman who helped revive the Thai silk industry.`,
      imageUrl: "./JimThompsonBangkok.jpg",
      countryId: "THA",
    },
    {
      title: "Bikepacking through New Zealand",
      description: `A thrilling two months of bikepacking through the stunning landscapes of New Zealand, 
    from the North Island to the South Island. Without prior bikepacking experience, I navigated through 
    diverse terrains, camped under the stars, immersed myself in the breathtaking scenery and visited lots of Lord 
    of the Rings filming locations. I learned to embrace the challenges of the journey, from steep climbs to 
    unpredictable weather, and discovered the joy of freedom on two wheels.`,
      imageUrl: "./NZDBike.jpg",
      countryId: "NZL",
    },
    {
      title: "Campervan trip through Australia",
      description: `Traveled through Australia in a campervan, exploring the Great Barrier Reef, the Outback,
    and vibrant cities like Sydney and Melbourne. The trip was a mix of adventure and relaxation, with plenty of 
    opportunities for hiking, snorkeling, and enjoying the unique wildlife. I learned a lot about the indigenous 
    cultures and the natural beauty of Australia, from the red sands of the Outback to the lush rainforests of 
    Queensland.`,
      imageUrl: "./australia.jpg",
      countryId: "AUS",
    },
    {
      title: "Daytrip to Muscat",
      description: `Explored the vibrant city of Muscat, Oman, visiting the stunning Sultan Qaboos Grand Mosque 
    and the bustling Mutrah Souq. The trip was a blend of cultural immersion and relaxation by the sea, with 
    opportunities to learn about Omani traditions and enjoy the local cuisine.`,
      imageUrl: "./oman.jpeg",
      countryId: "OMN",
    },
    {
      title: "Backpacking through Ireland",
      description: `A memorable backpacking trip through the lush landscapes of Ireland, visiting iconic
    sites like the Cliffs of Moher and the Ring of Kerry. The journey was filled with rich history, friendly 
    locals, and breathtaking scenery, from rolling green hills to ancient castles. I hitched rides with locals,
     camped under the starts, stayed with stranger who became friends, and learned to appreciate the beauty of 
     spontaneity and the kindness of strangers.`,
      imageUrl: "./ireland.jpg",
      countryId: "IRL",
    },
    {
      title: "Driving around Iceland in winter",
      description: `A breathtaking road trip around Iceland, exploring its unique landscapes, 
    from glaciers to geysers. The journey included visiting the Golden Circle, soaking in natural 
    hot springs, and witnessing the Northern Lights. I learned about the island\'s geology and culture while 
    enjoying the solitude and beauty of this remote destination.`,
      imageUrl: "./iceland.jpg",
      countryId: "ISL",
    },
    {
      title: "Trip to the USA",
      description: `Completed a summer course at Virgina Tech, where I immersed myself in American culture and education.
    The experience included attending lectures, participating in campus activities, and exploring the surrounding area. 
    I made friends from diverse backgrounds and learned about the American education system while enjoying the 
    vibrant campus life. Visited Washington D.C. and marveled at the historical landmarks, museums, and political 
    significance of the city. The trip was a blend of academic growth and cultural exploration, providing a unique
     perspective on American life.`,
      imageUrl: "./usa.jpeg",
      countryId: "USA",
    },
    {
      title: "Exploring England and Scotland",
      description: `Exchangen student in Newcastle Upon Tyne, England, where I attended classes, made friends, a
    nd explored the rich history and culture of the UK. The experience included a weekend trip to several scottish 
    landmarks like Loch Ness, Glenfinnan Viadukt (Harry Potter filming location) and a hike in the  Scottish 
    Highlands.`,
      imageUrl: "./harryPotter.jpg",
      countryId: "GBR",
    },
    {
      title: "Daytrip to Vienna",
      description: `Explored the historic city of Vienna, Austria, visiting iconic landmarks like the 
    Schönbrunn Palace and St. Stephen\'s Cathedral. The trip came about because of  an entrance exam for 
    the Technical University of Vienna. I passed the exam, but ultimately decided to continue my studies in Heilbronn.`,
      imageUrl: "./vienna.jpg",
      countryId: "AUT",
    },
    {
      title: "Language Exchange in France",
      description: `Participated in a language exchange program in France, where I improved my French skills while
    immersing myself in the local culture. The experience included engaging in cultural activities with our french 
    counterparts who were studying german and exploring the beautiful city of Strasbourg.`,
      imageUrl: "./france.jpg",
      countryId: "FRA",
    },
    {
    title: 'Hiking in Südtirol',
    description: `A memorable hiking trip in Südtirol, Italy, where I explored the stunning Dolomites with my family`,
    imageUrl: './suedtirol.jpg',
    countryId: 'ITA', // The ISO 3166-1 alpha-3 code for Thailand
    },
    {
    title: 'Visiting archeological sites on Kreta',
    description: `A fascinating trip to the island of Crete, Greece, where I visited ancient Minoan sites like Knossos and Phaistos.`,
    imageUrl: './kreta.jpg',
    countryId: 'GRC', // The ISO 3166-1 alpha-3 code for Thailand
    },

  ];

  const visitedCountryIds = travelsData.map((travel) => travel.countryId);

  const handleBackClick = () => {
    navigate("/", { state: { scrollTo: "hobbies" } });
  };

  return (
    <div className="bg-dark-theme-bg text-dark-theme-text min-h-screen py-16 px-8 md:px-16 lg:px-16">
      {/* Header row with back button and title */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={handleBackClick}
          className="text-white hover:text-gradient-start transition-colors duration-300"
        >
          <FaArrowLeft size={24} />
        </button>
        <h2 className="text-4xl font-bold text-white text-center flex-1">
          My Travels
        </h2>
        <div style={{ width: "24px" }} /> {/* Spacer for symmetry */}
      </div>

      {/* World Map */}
      <div className="flex-1 flex items-center justify-center">
        <WorldMap
          visitedCountries={visitedCountryIds}
          onCountryClick={handleCountryClick}
        />
      </div>
      {/* Render the modal if a country has been clicked */}
      {showCountryModal && (
        <CountryModal
          content={countryModalContent}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default TravelsPage;
