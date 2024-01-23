
import axios from 'axios';

export const API_BASE_URL = 'https://workout-crud.onrender.com/api' // url

// https://workout-crud.onrender.com/api/workouts/

export const fetchWorkouts = async () => {
    const response = await axios.get(`${API_BASE_URL}/workouts/`);
    console.log('response', response)
    return response.data;
  };