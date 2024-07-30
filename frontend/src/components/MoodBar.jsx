import React from 'react';
import styles from './MoodBar.module.css';
import { Person } from '@mui/icons-material';

function MoodBar({ negativeFeeling, positiveFeeling, averageValue, userCount }) {
  const percentage = (averageValue / 10) * 100;
  const negativeValue = percentage < 0 ? Math.abs(percentage) : 0;
  const positiveValue = percentage > 0 ? percentage : 0;

  return (
    <div className={styles.barContainer}>
      <div className={styles.negativeBarContainer}>
        <div
          className={styles.negativeBar}
          style={{ width: `${negativeValue}%` }}
        >
          {userCount > 0 && negativeValue !==0 && (
            <span className={styles.userCount}>
              <Person fontSize='small'  /> {userCount} 
            </span>
          )}
        </div>
      </div>

      <div>
        <p className={styles.moodCaptions}>
          {negativeFeeling} | {positiveFeeling}
        </p>
      </div>

      <div className={styles.positiveBarContainer}>
        <div
          className={styles.positiveBar}
          style={{ width: `${positiveValue}%` }}
        >
          {userCount > 0 && positiveValue !==0 && (
            <span className={styles.userCount}>
              <Person fontSize='small' /> {userCount} 
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodBar;










