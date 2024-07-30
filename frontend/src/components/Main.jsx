// // Main.jsx
// import React, { useState, useEffect } from 'react';
// import styles from './Main.module.css';
// import MoodSlider from './MoodSlider';
// import Head from './Head';
// import GlobalMood from './GlobalMood';
// import SelectName from './SelectName';
// import { fetchEntries, saveOrUpdateEntry } from '../api';
// import Expressions from './Expressions';
// import ExpressionFeed from './ExpressionFeed';

// function Main() {
//   const [moods, setMoods] = useState([
//     { id: 'sad_happy', negativeFeeling: 'sad', positiveFeeling: 'happy', value: 0 },
//     { id: 'anxious_relaxed', negativeFeeling: 'anxious', positiveFeeling: 'relaxed', value: 0 },
//     { id: 'bored_excited', negativeFeeling: 'bored', positiveFeeling: 'excited', value: 0 },
//     { id: 'uncertain_confident', negativeFeeling: 'uncertain', positiveFeeling: 'confident', value: 0 },
//     { id: 'tired_energetic', negativeFeeling: 'tired', positiveFeeling: 'energetic', value: 0 },
//   ]);
//   const [selectedName, setSelectedName] = useState('');
//   const [entries, setEntries] = useState([]);
//   const [averageMoods, setAverageMoods] = useState({});
//   const [moodCounts, setMoodCounts] = useState({});
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [expression, setExpression] = useState(''); 

//   useEffect(() => {
//     async function loadEntries() {
//       try {
//         const data = await fetchEntries();
//         console.log('Fetched entries:', data);
//         setEntries(data);
//         calculateAverages(data);
//         setTotalUsers(data.length); 
//       } catch (error) {
//         console.error('Error fetching entries:', error);
//       }
//     }

//     loadEntries();
//   }, []);

//   const calculateAverages = (data) => {
//     const userCount = data.length;
//     const moodSums = moods.reduce((acc, mood) => {
//       acc[mood.id] = 0;
//       return acc;
//     }, {});

//     const moodCounts = moods.reduce((acc, mood) => {
//       acc[mood.id] = 0;
//       return acc;
//     }, {});

//     data.forEach(entry => {
//       for (let moodId in moodSums) {
//         if (entry[moodId] !== 0) {
//           moodSums[moodId] += entry[moodId];
//           moodCounts[moodId]++;
//         }
//       }
//     });

//     const averages = {};
//     for (let moodId in moodSums) {
//       averages[moodId] = userCount ? moodSums[moodId] / userCount : 0;
//     }
//     setAverageMoods(averages);
//     setMoodCounts(moodCounts);
//   };

//   const handleMoodChange = (id, value) => {
//     setMoods(prevMoods =>
//       prevMoods.map(mood =>
//         mood.id === id ? { ...mood, value: parseInt(value, 10) } : mood
//       )
//     );
//   };

//   const handleUpdateVibe = async () => {
//     if (!selectedName) {
//       alert('Please select a name.');
//       return;
//     }

//     const moodData = { name: selectedName, expression }; 
//     moods.forEach(mood => {
//       moodData[mood.id] = mood.value;
//     });

//     try {
//       await saveOrUpdateEntry(moodData);
//       const data = await fetchEntries();
//       setEntries(data);
//       calculateAverages(data);
//       setTotalUsers(data.length); 
//     } catch (error) {
//       console.error('Error updating vibe:', error);
//     }
//   };

//   return (
//     <div className={styles.body}>
//       <Head />
//       <div className={styles.mainContent}>
//         <div className={styles.personalContainer}>
//           <SelectName selectedName={selectedName} setSelectedName={setSelectedName} />
//           <h2 className={styles.h3}>Hey {selectedName || 'Name'}! How are you today?</h2>
          
//           {moods.map(mood => (
//             <MoodSlider
//               key={mood.id}
//               id={mood.id}
//               negativeFeeling={mood.negativeFeeling}
//               positiveFeeling={mood.positiveFeeling}
//               value={mood.value}
//               onMoodChange={handleMoodChange}
//             />
//           ))}
//           {moods.some(mood => mood.value !== 0) && (
//             <Expressions moods={moods} onExpressionChange={setExpression} /> 
//           )}
//           <button onClick={handleUpdateVibe}>Update Vibe</button>
//         </div>
//         <div className={styles.companyContainer}>
//           <h2 className={styles.h1}>Today's vibe</h2>
//           <GlobalMood moods={moods} averages={averageMoods} moodCounts={moodCounts} />
//           <ExpressionFeed entries={entries} />
//         </div>
//       </div>
     
//     </div>
//   );
// }

// export default Main;


import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import MoodSlider from './MoodSlider';
import Head from './Head';
import GlobalMood from './GlobalMood';
import SelectName from './SelectName';
import { fetchEntries, saveOrUpdateEntry, deleteAllEntries } from '../api';
import Expressions from './Expressions';
import ExpressionFeed from './ExpressionFeed';

function Main() {
  const [moods, setMoods] = useState([
    { id: 'sad_happy', negativeFeeling: 'sad', positiveFeeling: 'happy', value: 0 },
    { id: 'anxious_relaxed', negativeFeeling: 'anxious', positiveFeeling: 'relaxed', value: 0 },
    { id: 'bored_excited', negativeFeeling: 'bored', positiveFeeling: 'excited', value: 0 },
    { id: 'uncertain_confident', negativeFeeling: 'uncertain', positiveFeeling: 'confident', value: 0 },
    { id: 'tired_energetic', negativeFeeling: 'tired', positiveFeeling: 'energetic', value: 0 },
  ]);
  const [selectedName, setSelectedName] = useState('');
  const [entries, setEntries] = useState([]);
  const [averageMoods, setAverageMoods] = useState({});
  const [moodCounts, setMoodCounts] = useState({});
  const [totalUsers, setTotalUsers] = useState(0);
  const [expression, setExpression] = useState(''); 

  useEffect(() => {
    async function loadEntries() {
      try {
        const data = await fetchEntries();
        console.log('Fetched entries:', data);
        setEntries(data);
        calculateAverages(data);
        setTotalUsers(data.length); 
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    }

    loadEntries();
  }, []);

  const calculateAverages = (data) => {
    const userCount = data.length;
    const moodSums = moods.reduce((acc, mood) => {
      acc[mood.id] = 0;
      return acc;
    }, {});

    const moodCounts = moods.reduce((acc, mood) => {
      acc[mood.id] = 0;
      return acc;
    }, {});

    data.forEach(entry => {
      for (let moodId in moodSums) {
        if (entry[moodId] !== 0) {
          moodSums[moodId] += entry[moodId];
          moodCounts[moodId]++;
        }
      }
    });

    const averages = {};
    for (let moodId in moodSums) {
      averages[moodId] = userCount ? moodSums[moodId] / userCount : 0;
    }
    setAverageMoods(averages);
    setMoodCounts(moodCounts);
  };

  const handleMoodChange = (id, value) => {
    setMoods(prevMoods =>
      prevMoods.map(mood =>
        mood.id === id ? { ...mood, value: parseInt(value, 10) } : mood
      )
    );
  };

  const handleUpdateVibe = async () => {
    if (!selectedName) {
      alert('Please select a name.');
      return;
    }

    const moodData = { name: selectedName, expression }; 
    moods.forEach(mood => {
      moodData[mood.id] = mood.value;
    });

    try {
      await saveOrUpdateEntry(moodData);
      const data = await fetchEntries();
      setEntries(data);
      calculateAverages(data);
      setTotalUsers(data.length); 
    } catch (error) {
      console.error('Error updating vibe:', error);
    }
  };

  const handleDeleteAllEntries = async () => {
    try {
      await deleteAllEntries();
      setEntries([]);
      setAverageMoods({});
      setMoodCounts({});
      setTotalUsers(0);
    } catch (error) {
      console.error('Error deleting entries:', error);
    }
  };

  return (
    <div className={styles.body}>
      <Head />
      <div className={styles.mainContent}>
        <div className={styles.personalContainer}>
          <SelectName selectedName={selectedName} setSelectedName={setSelectedName} />
          <h2 className={styles.h3}>Hey {selectedName || 'Name'}! How are you today?</h2>
          
          {moods.map(mood => (
            <MoodSlider
              key={mood.id}
              id={mood.id}
              negativeFeeling={mood.negativeFeeling}
              positiveFeeling={mood.positiveFeeling}
              value={mood.value}
              onMoodChange={handleMoodChange}
            />
          ))}
          {moods.some(mood => mood.value !== 0) && (
            <Expressions moods={moods} onExpressionChange={setExpression} /> 
          )}
          <button onClick={handleUpdateVibe}>Update Vibe</button>
          
        </div>
        <div className={styles.companyContainer}>
          <h2 className={styles.h1}>Today's vibe</h2>
          <GlobalMood moods={moods} averages={averageMoods} moodCounts={moodCounts} />
          <ExpressionFeed entries={entries} />
          <button onClick={handleDeleteAllEntries}>Reset All</button>
        </div>
      </div>
     
    </div>
  );
}

export default Main;
