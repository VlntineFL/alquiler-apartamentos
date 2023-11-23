import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a la página de arriendo de apartamentos</h1>
      <Link to="/search">Buscar Apartamentos</Link>
      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/register">Registrarse</Link>
    </div>
  );
};

export default HomePage;