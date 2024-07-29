// models/moodSchema.js
import mongoose from 'mongoose';

const moodSchema = new mongoose.Schema({
  name: String,
  sad_happy: Number,
  anxious_relaxed: Number,
  bored_excited: Number,
  uncertain_confident: Number,
  tired_energetic: Number,
  expression: String, // Add this line
});

const Mood = mongoose.model('Mood', moodSchema);

export default Mood;
