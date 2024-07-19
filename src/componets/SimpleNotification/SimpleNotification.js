import React, { useEffect } from 'react';
import './SimpleNotification.css';

const SimpleNotification = ({ message}) => {
  if (message === null) {
    return null
  }
  return (
    <div className="simple-notification">
      {message}
    </div>
  );
};

export default SimpleNotification;