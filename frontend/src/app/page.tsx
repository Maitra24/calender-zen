"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // You still need to import react-calendar's default styles

type Value = Date | Date[] | [Date, Date] | null;

export default function Page() {
  const [date, setDate] = useState<Value>(null);
  const [events, setEvents] = useState<{ [key: string]: string[] }>({}); // Store events by date
  const [newEvent, setNewEvent] = useState<string>("");

  // Handle the calendar date change
  const handleDateChange = (value: Value) => {
    setDate(value);
  };

  // Handle event creation
  const handleAddEvent = () => {
    if (newEvent && date instanceof Date) {
      const dateKey = date.toISOString().split("T")[0]; // Use date as a key (yyyy-mm-dd format)
      setEvents((prevEvents) => ({
        ...prevEvents,
        [dateKey]: [...(prevEvents[dateKey] || []), newEvent],
      }));
      setNewEvent("");
    }
  };

  // Handle event removal
  const handleDeleteEvent = (event: string) => {
    if (date instanceof Date) {
      const dateKey = date.toISOString().split("T")[0];
      setEvents((prevEvents) => ({
        ...prevEvents,
        [dateKey]: prevEvents[dateKey]?.filter((e) => e !== event) || [],
      }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-50">
      <h1 className="text-4xl font-semibold text-gray-900 mb-5">
        Event Calendar
      </h1>

      <div className="mb-5">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="react-calendar rounded-xl shadow-lg"
          tileClassName="calendar-tile"
          tileContent={({ date, view }) =>
            view === "month" && events[date.toISOString().split("T")[0]] ? (
              <div className="text-xs text-center text-white bg-indigo-500 rounded-full p-1">
                {events[date.toISOString().split("T")[0]].length}
              </div>
            ) : null
          }
        />
      </div>

      {date instanceof Date && (
        <div className="w-80 p-5 bg-white border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Events for {date.toLocaleDateString()}
          </h2>

          <div className="flex items-center mb-4">
            <input
              type="text"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="Add new event"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleAddEvent}
              className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Add Event
            </button>
          </div>

          <ul className="space-y-3">
            {events[date.toISOString().split("T")[0]]?.map((event, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-sm"
              >
                <span className="text-gray-800">{event}</span>
                <button
                  onClick={() => handleDeleteEvent(event)}
                  className="ml-2 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
