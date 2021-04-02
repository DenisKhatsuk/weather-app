import React, { useEffect, useState } from 'react';

import './date-indicator.scss';

const DateIndicator = ({ timezone, language = 'en-GB' }) => {
  const [date, setDate] = useState([]);

  const getCurrentDate = () => {
    const DATE = new Date();
    const options = {
      timeZone: timezone,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    const localDateString = DATE.toLocaleString(language, options);
    const localDateStringArray = localDateString.split(',');
    const [weekday, monthAndDay, time] = localDateStringArray;
    const [month, day] = monthAndDay.trim().split(' ');
    return [weekday, day, month, time];
  };

  const updateDate = () => {
    const currentDate = getCurrentDate();
    setDate(currentDate);
  };

  useEffect(() => {
    updateDate();
    const timeInterval = setInterval(() => {
      updateDate();
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  const [weekday, day, month, time] = date;

  return (
    <div className="location__date">
      {`${weekday} ${day} ${month}, ${time}`}
    </div>
  );
};

export default DateIndicator;
