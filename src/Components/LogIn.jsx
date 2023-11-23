import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      // Simular una llamada asíncrona al servidor para la autenticación
      const response = await fakeAuthentication(email, password);

      // Verificar la respuesta del servidor
      if (response.success) {
        setLoggedIn(true);
        alert('Inicio de sesión exitoso!');
      } else {
        alert('Autenticación fallida. Verifica tu correo electrónico y contraseña.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      alert('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const fakeAuthentication = (email, password) => {
    // Simula una llamada asíncrona al servidor
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simula la verificación de credenciales en el servidor
        if (email === 'usuario@example.com' && password === 'contraseña') {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000); // Simula un retardo en la llamada al servidor
    });
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Contraseña:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
      </button>

      {isLoggedIn && <p>¡Has iniciado sesión con éxito!</p>}
    </div>
  );
};

export default Login;
