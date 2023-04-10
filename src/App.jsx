import { useState } from "react";
import "./App.css";
import Slider from "./Components/Slider/Slider";

function App() {
  const [currentShapeIndex, setCurrentShapeIndex] = useState(null);
  const [confidenceLevel, setConfidenceLevel] = useState(50);
  const [feedback, setFeedback] = useState("");
  const [count, setCount] = useState(0);

  const handleShapeClick = (index) => {
    setCurrentShapeIndex(index);
    console.log(`shape index is ${index}`);
  };

  const handleSliderChange = (event) => {
    setConfidenceLevel(event.target.value);
  };

  const handleCheckAnswer = () => {
    if (currentShapeIndex === 3 && confidenceLevel >= 50) {
      setFeedback("כל הכבוד, תשובה נכונה!");
    } else if (currentShapeIndex === 3 && confidenceLevel < 50) {
      setFeedback("תשובה נכונה, כדאי שתהיי יותר בטוחה!");
    } else {
      setFeedback("טעות, נסי שוב.");
    }
  };

  return (
    <>
      <div className='app'>
        <div className='app__container'>
          <div className='shapes__container'>
            <div
              className={`triangle1 ${
                currentShapeIndex === 0 ? "shape__active" : ""
              }`}
              onClick={() => handleShapeClick(0)}
            >
              <p>
                A<sup>1</sup>
              </p>
            </div>
            <div
              className={`triangle2 ${
                currentShapeIndex === 1 ? "shape__active" : ""
              }`}
              onClick={() => handleShapeClick(1)}
            >
              <p>
                A<sup>2</sup>
              </p>
            </div>
            <div
              className={`shape1 ${
                currentShapeIndex === 2 ? "shape__active" : ""
              }`}
              onClick={() => handleShapeClick(2)}
            >
              <p>C</p>
            </div>
            <div
              className={`triangle3 ${
                currentShapeIndex === 3 ? "shape__active" : ""
              }`}
              onClick={() => handleShapeClick(3)}
            >
              <p>D</p>
            </div>
            <div
              className={`square1 ${
                currentShapeIndex === 4 ? "shape__active" : ""
              }`}
              onClick={() => handleShapeClick(4)}
            >
              <p>E</p>
            </div>
            <div
              className={`triangle4 ${
                currentShapeIndex === 5 ? "shape__active" : ""
              }`}
              onClick={() => handleShapeClick(5)}
            >
              <p>
                B<sup>1</sup>
              </p>
            </div>
            <div
              className={`triangle5 ${
                currentShapeIndex === 6 ? "shape__active" : ""
              }`}
              onClick={() => handleShapeClick(6)}
            >
              <p>
                B<sup>2</sup>
              </p>
            </div>
            <div
              className='shape__main'
              onClick={() => handleShapeClick(7)}
            ></div>
          </div>
          <div className='slider__container'>
            <h1>איזו מ-7 הצורות במקרא, חסרה בצללית המוצגת?</h1>
            <p>עד כמה אתה בטוח שהתשובה נכונה?</p>
            <div className='slider'>
              <h1>How confident are you ?</h1>
              <p>Your confidence level: {confidenceLevel}%</p>
              <input
                type='range'
                min='0'
                max='100'
                value={confidenceLevel}
                onChange={handleSliderChange}
              />
            </div>
            {currentShapeIndex !== null && (
              <button onClick={handleCheckAnswer}>Check Answer</button>
            )}
            {feedback && <p>{feedback}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
