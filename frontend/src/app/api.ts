import axios from 'axios';
import { WorkoutCreate, WorkoutUpdate } from '../features/workouts/workoutSlice';

export const API_BASE_URL = 'https://workout-crud.onrender.com/api' // url

export const apiFetchWorkouts = async () => {
    const response = await axios.get(`${API_BASE_URL}/workouts/`);
    return response.data;
};

export const apiCreateWorkout = async (newWorkout: WorkoutCreate) => {
    const response = await axios.post(`${API_BASE_URL}/workouts/`, newWorkout);
    return response.data;   
}

export const apiDeleteWorkout = async (id: string) => {
    const response = await axios.delete(`${API_BASE_URL}/workouts/${id}`);
    return response.data
}

export const apiUpdateWorkout = async (updatedWorkout: WorkoutUpdate) => {
    const response = await axios.patch(`${API_BASE_URL}/workouts/${updatedWorkout._id}`, updatedWorkout)
    return response.data
}

