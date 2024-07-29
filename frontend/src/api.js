// api.js
import axios from 'axios';
const REACT_APP_BACKEND = process.env.BACKEND;


export const fetchEntries = async () => {
  try {
    const response = await axios.get(`${REACT_APP_BACKEND}/api/moods`); // Ensure this matches backend route
    return response.data;
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw error;
  }
};

export const saveOrUpdateEntry = async (entry) => {
  try {
    await axios.post(`${REACT_APP_BACKEND}/api/moods`, entry); // Ensure this matches backend route
  } catch (error) {
    console.error('Error saving or updating entry:', error);
    throw error;
  }
};
