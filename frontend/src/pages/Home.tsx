import { RootState } from '../app/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts, Workout } from '../features/workouts/workoutSlice';

const Home = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state: RootState) => state.workout.workouts);

  useEffect(() => {
    // Dispatch the action to fetch workouts
    dispatch(fetchWorkouts() as any);
  }, [dispatch]);

  useEffect(() => {
    // This effect will run whenever the 'workouts' state changes
    console.log('Updated workouts:', workouts);
  }, [workouts]);

  return (
    <div>
      {workouts.map((workout: Workout) => (
        <div key={workout._id}>
          <h2>{workout.title}</h2>
          <p>Reps: {workout.reps}</p>
          <p>Load: {workout.load}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
