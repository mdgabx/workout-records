import { 
    apiFetchWorkouts,
    apiCreateWorkout,
    apiDeleteWorkout,
    apiUpdateWorkout
} from '../../app/api'
import { 
    PayloadAction, 
    createAsyncThunk, 
    createSlice,
} from "@reduxjs/toolkit";

export interface Workout {
    _id: string;
    title: string;
    reps: number;
    load: number;
    createdAt: Date;
}

export interface WorkoutsState {
    workouts: Workout[];
    status: 'idle' | 'loading' | 'success' | 'failed';
    error: string | null;
}
export interface WorkoutCreate {
    title: string;
    reps: number;
    load: number;
}
export interface WorkoutUpdate {
    _id: string;
    title: string;
    reps: number;
    load: number;
}
  
const initialState: WorkoutsState = {
    workouts: [],
    status: 'idle',
    error: null,
}

type FetchWorkoutsResponse = Workout[];

export const fetchWorkouts = createAsyncThunk<FetchWorkoutsResponse, void>(
    'workouts/fetchWorkouts',
    async () => {
      const response = await apiFetchWorkouts();
      return response as FetchWorkoutsResponse;
    }
  );

export const createWorkout = createAsyncThunk(
    'workouts/CreateWorkout', 
    async (newWorkout: WorkoutCreate) => {
        const response = await apiCreateWorkout(newWorkout)
        return response
    }
);

export const deleteWorkout = createAsyncThunk(
    'workouts/DeleteWorkout',
    async (workoutId: string) => {
        const response = await apiDeleteWorkout(workoutId)
        return response
    }
)

export const updateWorkout = createAsyncThunk(
    'workouts/UpdateWorkout',
    async (updatedWorkout: WorkoutUpdate) => {
        const response = await apiUpdateWorkout(updatedWorkout)
        return response
    }
)

const workoutSlice = createSlice({
    name: 'workouts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(fetchWorkouts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchWorkouts.fulfilled, (state, action: PayloadAction<Workout[]>) => {
                state.status = 'success',
                state.workouts = action.payload
            })
            .addCase(fetchWorkouts.rejected, (state, action) => {
                state.status = 'failed',
                state.error  = action.error.message ?? "Unknown Error"
            })
            .addCase(createWorkout.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createWorkout.fulfilled, (state, action: PayloadAction<Workout>) => {
                state.status = 'success',
                state.workouts.push(action.payload)
            })
            .addCase(createWorkout.rejected, (state, action) => {
                state.status = 'failed',
                state.error  = action.error.message ?? "Unknown Error"
            })
            .addCase(deleteWorkout.fulfilled, (state, action) => {
                state.status = 'success',
                state.workouts = state.workouts.filter(workout => workout._id !== action.payload._id)
            })
            .addCase(updateWorkout.fulfilled, (state, action) => {
                state.status = 'success',
                state.workouts = state.workouts.map(workout => workout._id === action.payload._id ? action.payload : workout)
            })
    }
})

export default workoutSlice.reducer