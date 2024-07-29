// ExpressionFeed.jsx
import React from 'react';
import styles from './ExpressionFeed.module.css';

function ExpressionFeed({ entries }) {
  return (
    <div className={styles.expressionFeed}>
      <h2 className={styles.header}>Expression Feed</h2>
      <div className={styles.feedContainer}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entry}>
            <p><strong>{entry.name}:</strong> {entry.expression}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpressionFeed;
