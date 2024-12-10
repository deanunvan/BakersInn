import React, { useState, useEffect } from 'react';
import './Preloader.css'; // Import the CSS for styling

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Show preloader for at least 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // Don't render anything if not visible

  return (
    <div className="preloader">
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
    </div>
  );
};

export default Preloader; 