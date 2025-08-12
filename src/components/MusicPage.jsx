import React from "react";
import { FaArrowLeft, FaSpotify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const musicData = [
  {
    title: "I Am The Antichrist To You",
    artist: "Kishi Bashi",
    genre: "Alternative",
    text: "Beautifully orchestrated and interpreted differently every time you listen to it.",
    imageUrl: "./antichrist .jpeg",
    spotifyUrl: "https://open.spotify.com/intl-de/track/29jtZGdgpE2lWm2mkIt6HS", // example link
  },
  {
    title: "Mess Is Mine",
    artist: "Vance Joy",
    genre: "Indie Folk",
    text: "My mood brightens up every time I listen to this.",
    imageUrl: "./messIsMine.jpg",
    spotifyUrl: "https://open.spotify.com/album/1jWmEhn3ggaL6isoyLfwBn", // example link
  },
  {
    title: "The Rocky Road to Dublin",
    artist: "The High Kings",
    genre: "Irish Folk",
    text: "Famous Irish song that inspires me to grab my backpack and hike through Ireland once again.",
    imageUrl: "./rockyRoad.jpg",
    spotifyUrl: "https://open.spotify.com/intl-de/track/62HrWeJxE5xyWKPiVUvyyB", // example link
  },
  {
    title: "The Ecstasy Of Gold",
    artist: "Ennio Morricone",
    genre: "Western",
    text: "A timeless masterpiece that does not need an explanation.",
    imageUrl: "./ecstasyOfGold.jpeg",
    spotifyUrl: "https://open.spotify.com/intl-de/track/6PrKZUXJPmBiobMN44yR8Y", // example link
  },
  {
    title: "28",
    artist: "Zach Bryan",
    genre: "Country",
    text: "Makes me feel thankful and lucky to be alive ",
    imageUrl: "twentyEight.jpg",
    spotifyUrl: "https://open.spotify.com/intl-de/track/5iJKGpnFfvbjZJeAtwXfCj", // example link
  },
];

const MusicPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/", { state: { scrollTo: "hobbies" } });
  };

  return (
    <div className="bg-dark-theme-bg text-dark-theme-text min-h-screen py-16 px-8 md:px-16 lg:px-24">
      {/* Header with arrow far left and title centered */}
      <div className="relative flex items-center justify-center mb-12">
        <button
          onClick={handleBackClick}
          className="absolute left-0 text-white hover:text-gradient-start transition-colors duration-300"
        >
          <FaArrowLeft size={28} />
        </button>
        <h2 className="text-4xl font-bold text-white text-center">
          Favorite Music
        </h2>
      </div>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
        These songs I can listen to all the time.
      </p>

      {/* Cards in horizontal scroll */}
      <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4">
        {musicData.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700
                       transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gradient-start/30"
          >
            {/* Album cover */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />

            {/* Spotify link icon */}
            <div className="flex justify-end mb-2">
              <a
                href={item.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors duration-300"
              >
                <FaSpotify size={24} />
              </a>
            </div>

            {/* Title */}
            <h4 className="text-xl font-bold text-gradient-start mb-1">
              {item.title}
            </h4>

            {/* Artist + Genre */}
            <p className="text-base text-gray-400 mb-2">
              {item.artist} ({item.genre})
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPage;
