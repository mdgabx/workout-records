import { fetchWorkouts as apiFetchWorkouts } from '../../app/api'
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
    }
})

export default workoutSlice.reducer