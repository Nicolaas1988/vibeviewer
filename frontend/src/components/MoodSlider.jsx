import React from 'react';
import styles from './MoodSlider.module.css';

function MoodSlider({ id, negativeFeeling, positiveFeeling, value, onMoodChange }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    console.log('Slider ID:', id); // Debugging
    console.log('Slider Value:', newValue); // Debugging
    if (id && newValue) {
      onMoodChange(id, newValue);
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slidecontainer}>
        <input
          type='range'
          min='-10'
          max='10'
          value={value}
          className={styles.slider}
          onChange={handleChange}
        />
      </div>
      <div className={styles.moodCaptions}>
        <p>{negativeFeeling}</p>
        <p>{positiveFeeling}</p>
      </div>
    </div>
  );
}

export default MoodSlider;
