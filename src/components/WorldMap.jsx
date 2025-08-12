// src/components/WorldMap.jsx
import React, { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";

/**
 * A spinning 3D globe component that highlights visited countries,
 * with hover effects and click-to-popup functionality.
 *
 * @param {Object} props
 * @param {string[]} props.visitedCountries - An array of country ISO Alpha-3 codes (e.g., "DEU", "USA") to highlight.
 * @param {function} props.onCountryClick - A callback function to be executed when a visited country is clicked.
 * @returns {JSX.Element} The spinning globe component.
 */
const WorldMap = ({ visitedCountries, onCountryClick }) => {
  const globeRef = useRef();
  const [countries, setCountries] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  useEffect(() => {
    // Fetch GeoJSON country borders
    fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .then(res => res.json())
      .then(data => {
        setCountries(data.features);
      });
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <div className="flex justify-center">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
        polygonsData={countries}
        
        // Conditional color for visited, hovered, and unvisited countries
        polygonCapColor={({ id }) => {
          if (hoveredCountry && hoveredCountry.id === id) {
            return '#ffffff'; // white for hovered country
          }
          return visitedCountries.includes(id)
            ? '#36d1dc' // Orange for visited
            : '#444444'; // Dark grey for unvisited
        }}
        
        // Conditional color for polygon sides
        polygonSideColor={({ id }) => {
          if (hoveredCountry && hoveredCountry.id === id) {
            return '#ffffff'; // white for hovered country side
          }
          return visitedCountries.includes(id)
            ? '#ffffff' // Lighter orange for visited side
            : '#222222'; // Darker grey for unvisited side
        }}
        
        polygonStrokeColor={() => "#111"}
        height={700}
        width={700}

        // Mouse hover handler
        onPolygonHover={(polygon) => {
          setHoveredCountry(polygon);
        }}

        // Mouse click handler
        onPolygonClick={(polygon) => {
          if (visitedCountries.includes(polygon.id)) {
            // Call the prop function with the entire country data
            onCountryClick(polygon);
          }
        }}
      />
    </div>
  );
};

export default WorldMap;
