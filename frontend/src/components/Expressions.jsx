// Expressions.jsx
import React, { useState, useEffect } from 'react';
import styles from './Expressions.module.css';

function Expressions({ moods, onExpressionChange }) {
  const [text, setText] = useState('');
  const [visibleMoods, setVisibleMoods] = useState([]);

  useEffect(() => {
    const newVisibleMoods = moods
      .filter(mood => mood.value !== 0)
      .map(mood => ({
        feeling: mood.value > 0 ? mood.positiveFeeling : mood.negativeFeeling,
        positive: mood.value > 0,
      }));
    setVisibleMoods(newVisibleMoods);
  }, [moods]);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    onExpressionChange(value); // Pass the text to the parent component

    const newVisibleMoods = visibleMoods.filter(
      mood => !value.toLowerCase().includes(mood.feeling.toLowerCase())
    );
    setVisibleMoods(newVisibleMoods);
  };

  const getBadgeStyle = (positive) => {
    return positive 
      ? { background: 'linear-gradient(90deg, rgba(87, 111, 230, 1) 0%, rgba(59, 173, 227, 1) 100%)' }
      : { background: 'linear-gradient(90deg, rgba(255, 53, 127, 1) 0%, rgba(152, 68, 183, 1) 100%)' };
  };

  return (
    <div className={styles.expressionsContainer}>
      <h3>Care to share why you feel...</h3>
      <div className={styles.badgesContainer}>
        {visibleMoods.map((mood, index) => (
          <span key={index} className={styles.badge} style={getBadgeStyle(mood.positive)}>
            {mood.feeling}
          </span>
        ))}
      </div>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={handleChange}
        placeholder="Express your feelings here..."
      />
    </div>
  );
}

export default Expressions;
