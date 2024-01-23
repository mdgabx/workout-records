import { configureStore } from '@reduxjs/toolkit'
import workoutReducer from '../features/workouts/workoutSlice'

export const store = configureStore({
    reducer: {
        workout: workoutReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

