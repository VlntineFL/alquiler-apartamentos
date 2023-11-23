
import React, { useState } from 'react';

const SearchBar = ({ apartments, setFilteredApartments }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Filtrar apartamentos según la localidad
    const filteredResults = apartments.filter(apartment =>
      apartment.location.toLowerCase().includes(location.toLowerCase())
    );

    // Actualizar el estado con los resultados de la búsqueda
    setFilteredApartments(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por localidad"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;

