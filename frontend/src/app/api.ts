import axios from 'axios';
import { Workout } from '../features/workouts/workoutSlice';

export const API_BASE_URL = 'https://workout-crud.onrender.com/api' // url

export const apiFetchWorkouts = async () => {
    const response = await axios.get(`${API_BASE_URL}/workouts/`);
    return response.data;
};

export const apiCreateWorkout = async (newWorkout: Workout) => {
    const response = await axios.post(`${API_BASE_URL}/workouts/`, newWorkout);
    return response.data;   
}

