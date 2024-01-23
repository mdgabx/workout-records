
import axios from 'axios';

export const API_BASE_URL = 'https://workout-crud.onrender.com/api' // url

export const fetchWorkouts = async () => {
    const response = await axios.get(`${API_BASE_URL}/workouts/`);
    return response.data;
};

export const createWorkout = async () => {
    
}

