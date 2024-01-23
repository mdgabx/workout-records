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
    <div className="font-urbanist flex flex-col items-center justify-evenly">
      <h2 className="font-urbanist text-left">Records</h2>
      
      <div className="mx-auto w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-10">
      {workouts.map((workout: Workout) => (
        <div key={workout._id} className="shadow-md border border-gray-200 p-7 rounded">
          <h2>{workout.title}</h2>
          <p>Reps: {workout.reps}</p>
          <p>Load: {workout.load}</p>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Home;
