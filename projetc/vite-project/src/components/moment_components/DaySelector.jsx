import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const DaySelector = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      
      const dateFormat = moment(date).format('DD/MM/YYYY');
      console.log(`Fecha seleccionada: ${dateFormat}`);
      setSelectedDate(date);
    };
    // Creamos la hora actual
    const currentDateTime = moment().format('DD/MM/YYYY'); 

  return (
    <div>
      <DatePicker className="border-2 border-gray-300 rounded-md p-2 px-3"
        placeholderText={currentDateTime}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </div>
  );
};

export default DaySelector;