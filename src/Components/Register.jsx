
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setRegistered] = useState(false);

  const handleRegister = () => {
    // Verifica que todos los campos estén completos
    if (name.trim() === '' || email.trim() === '' || phoneNumber.trim() === '' || password.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setRegistered(true);
    alert('Registro exitoso!');
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <label>Nombre:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Número de Celular:</label>
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

      <label>Contraseña:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Registrarse</button>

      {isRegistered && <p>¡Te has registrado con éxito!</p>}
    </div>
  );
};

export default Register;
