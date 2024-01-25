import { RootState } from '../app/store';
import { useEffect } from 'react';
import { deleteWorkout, fetchWorkouts, Workout } from '../features/workouts/workoutSlice';
import CardDetails from '../components/CardDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const Home = () => {
  const dispatch = useAppDispatch();
  const workouts = useAppSelector((state: RootState) => state.workout.workouts)

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  const handleDelete = (workoutId?: string) => {
    if(workoutId) {
      dispatch(deleteWorkout(workoutId))
    }
    
  }

  return (
    <div className="flex w-full px-10 flex-row items-start justify-between gap-x-4">
      <div className="mx-auto w-7/12 flex flex-col items-stretch gap-4 my-10">
      {workouts.map((workout: Workout) => (
       <CardDetails key={workout._id}  {...workout} onDelete={() => handleDelete(workout._id)}  />
      ))}
    </div>

    <WorkoutForm />
    
  </div>
  );
};

export default Home;
