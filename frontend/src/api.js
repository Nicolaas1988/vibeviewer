// api.js
import axios from 'axios';
const BACKEND = process.env.REACT_APP_BACKEND;


export const fetchEntries = async () => {
  try {
    const response = await axios.get(`${BACKEND}/api/moods`); // Ensure this matches backend route
    return response.data;
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw error;
  }
};

export const saveOrUpdateEntry = async (entry) => {
  try {
    await axios.post(`${BACKEND}/api/moods`, entry); // Ensure this matches backend route
  } catch (error) {
    console.error('Error saving or updating entry:', error);
    throw error;
  }
};

export const deleteAllEntries = async () => {
  try {
    await axios.delete(`${BACKEND}/api/moods`); // Ensure this matches backend route
  } catch (error) {
    console.error('Error deleting entries:', error);
    throw error;
  }
};
