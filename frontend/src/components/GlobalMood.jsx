

import React from 'react';
import styles from './GlobalMood.module.css';
import MoodBar from './MoodBar';

function GlobalMood({ moods, averages, moodCounts }) {
  return (
    <div>
      {moods.map(mood => (
        <MoodBar
          key={mood.id}
          negativeFeeling={mood.negativeFeeling}
          positiveFeeling={mood.positiveFeeling}
          averageValue={averages[mood.id]}
          userCount={moodCounts[mood.id]}
        />
      ))}
    </div>
  );
}

export default GlobalMood;






