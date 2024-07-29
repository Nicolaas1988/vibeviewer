// routes/routes.js
import express from 'express';
import Mood from '../models/moodSchema.js';

const router = express.Router();

// Get all entries
router.get('/moods', async (req, res) => {
  try {
    const moods = await Mood.find();
    res.json(moods); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add or update an entry
router.post('/moods', async (req, res) => {
  const { name, sad_happy, anxious_relaxed, bored_excited, uncertain_confident, tired_energetic, expression } = req.body;

  try {
    const existingMood = await Mood.findOne({ name });

    if (existingMood) {
      // Update the existing entry
      existingMood.sad_happy = sad_happy;
      existingMood.anxious_relaxed = anxious_relaxed;
      existingMood.bored_excited = bored_excited;
      existingMood.uncertain_confident = uncertain_confident;
      existingMood.tired_energetic = tired_energetic;
      existingMood.expression = expression;

      const updatedMood = await existingMood.save();
      res.json(updatedMood);
    } else {
      // Create a new entry
      const mood = new Mood({
        name,
        sad_happy,
        anxious_relaxed,
        bored_excited,
        uncertain_confident,
        tired_energetic,
        expression,
      });

      const newMood = await mood.save();
      res.status(201).json(newMood);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
