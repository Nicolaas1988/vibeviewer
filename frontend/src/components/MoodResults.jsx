
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import styles from './MoodResults.module.css';

const MoodResults = ({ moodSums, positiveMoodSums, negativeMoodSums }) => {
  const labels = Object.keys(moodSums).map(mood => mood.replace('_', ' '));

  const positiveData = Object.keys(moodSums).map(mood => positiveMoodSums[mood]);
  const negativeData = Object.keys(moodSums).map(mood => negativeMoodSums[mood]);

  return (
    <div className={styles.moodResultsContainer}>
     
      <div className={styles.barChartContainer}>
        <BarChart
          xAxis={[{ scaleType: 'band', data: labels }]}
          series={[
            { label: `Positive`, data: positiveData, color: `rgba(59, 173, 227, 1)` },
            { label: 'Negative', data: negativeData, color: 'rgba(255, 53, 127, 1)' }
          ]}
          leftAxis={null}
          minWidth={500}
          height={500}
          borderRadius={50}
          barLabel="value"
        //   layout="horizontal"
         
        />
      </div>
    </div>
  );
};

export default MoodResults;








