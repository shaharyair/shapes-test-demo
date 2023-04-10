import React, { useState } from "react";
import "./Slider.css";

function ConfidenceSlider() {
  const [confidenceLevel, setConfidenceLevel] = useState(50);

  const handleSliderChange = (event) => {
    setConfidenceLevel(event.target.value);
  };

  return (
    <div className='slider'>
      <h1>How confident you are?</h1>
      <p>Your confidence level: {confidenceLevel}%</p>
      <input
        type='range'
        min='0'
        max='100'
        value={confidenceLevel}
        onChange={handleSliderChange}
      />
    </div>
  );
}

export default ConfidenceSlider;
