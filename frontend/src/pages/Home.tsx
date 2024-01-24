import { RootState } from '../app/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts, Workout } from '../features/workouts/workoutSlice';
import CardDetails from '../components/CardDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state: RootState) => state.workout.workouts);

  useEffect(() => {
    // Dispatch the action to fetch workouts
    dispatch(fetchWorkouts());
  }, [dispatch]);

  useEffect(() => {
    // This effect will run whenever the 'workouts' state changes
    console.log('Updated workouts:', workouts);
  }, [workouts]);


  return (
    <div className="flex w-full px-10 flex-row items-start justify-between gap-x-4">
      {/* <h2 className="font-urbanist text-left">Records</h2> */}
      
      <div className="mx-auto w-7/12 flex flex-col items-stretch gap-4 my-10">
      {workouts.map((workout: Workout) => (
       <CardDetails key={workout._id}  {...workout} />
      ))}
    </div>

    <WorkoutForm />
    
  </div>
  );
};

export default Home;
