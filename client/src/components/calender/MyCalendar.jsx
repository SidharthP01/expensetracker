import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  const [value, onChange] = useState();

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default MyCalendar;
