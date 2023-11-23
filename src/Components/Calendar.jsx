import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);

    
    console.log('Fecha seleccionada:', date);
  };

  const handleBooking = () => {
    
    if (selectedDate) {
      console.log('Reserva confirmada para la fecha:', selectedDate);
    } else {
      console.log('Selecciona una fecha antes de confirmar la reserva');
    }
  };

  return (
    <div>
      <h2>Seleccione la fecha de arrendamiento:</h2>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />

      {/* Botón para confirmar la reserva */}
      <button onClick={handleBooking}>Confirmar Reserva</button>
    </div>
  );
};

export default Calendar;
