
import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== 'Agregar el nuevo mensaje a la lista de mensajes') {
    
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('mensaje');
    }
  };

  return (
    <div>
      <h2>Chat con el arrendador</h2>

      {/* Lista de mensajes */}
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '200px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', color: message.sender === 'user' ? 'green' : 'blue' }}>
            {message.text}
          </div>
        ))}
      </div>

      {/* Cuadro de entrada de mensajes */}
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
