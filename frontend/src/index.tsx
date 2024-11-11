import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/esm/shared/types.js";

export default function Home() {
  const [date, setDate] = useState<Date | null>(new Date());

  const handleDateChange = (newDate: Value) => {
    if (newDate) {
      setDate(newDate as Date); // Ensure it is cast to Date if not null
    }
  };

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar onChange={handleDateChange} value={date} />
    </div>
  );
}
