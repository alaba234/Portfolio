import React, {useState} from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import WorldMap from './WorldMap';
import { useNavigate } from 'react-router-dom';
import CountryModal from './CountryModal'; // Import the new modal component


const TravelsPage = () => {
  const navigate = useNavigate();

   // State for the new country modal
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [countryModalContent, setCountryModalContent] = useState(null);

  // Function to handle a country click from the globe
  const handleCountryClick = (countryData) => {
    setCountryModalContent(countryData);
    setShowCountryModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowCountryModal(false);
    setCountryModalContent(null);
  };

 const travelsData = [
  { title: 'Semester Abroad in Madrid, Spain', countryId: 'ARG' },
  { title: 'Backpacking Through Thailand', countryId: 'THA' },
  { title: 'Visiting Ancient Temples in Cambodia', countryId: 'KHM' },
];

const visitedCountryIds = travelsData.map(travel => travel.countryId);

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'hobbies' } });
  };

  return (
    <div className="bg-dark-theme-bg text-dark-theme-text min-h-screen py-16 px-8 md:px-16 lg:px-16">
      {/* Header row with back button and title */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={handleBackClick}
          className="text-white hover:text-neon-green transition-colors duration-300"
        >
          <FaArrowLeft size={24} />
        </button>
        <h2 className="text-4xl font-bold text-white text-center flex-1">
          My Travels
        </h2>
        <div style={{ width: '24px' }} /> {/* Spacer for symmetry */}
      </div>

      {/* World Map */}
      <div className="flex-1 flex items-center justify-center">
      <WorldMap visitedCountries={visitedCountryIds}  onCountryClick={handleCountryClick} />  
    </div>
     {/* Render the modal if a country has been clicked */}
      {showCountryModal && (
        <CountryModal content={countryModalContent} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default TravelsPage;
