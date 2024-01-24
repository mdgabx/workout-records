import { RootState } from '../app/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts, Workout } from '../features/workouts/workoutSlice';

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

  const CardDetails:React.FC<Workout> = ({ title, reps, load, createdAt }) => (
    <div className="shadow-md border w-full border-gray-200 p-7 rounded">
    <h2 className="text-sky-600 text-xl font-urbanist font-bold">{title}</h2>
    <p><strong>Reps:</strong> {reps}</p>
    <p><strong>Load:</strong> {load}</p>
    <p>{new Date(createdAt).toLocaleDateString()}</p>
  </div>
  )

  return (
    <div className="flex w-full px-10 flex-row items-start justify-between">
      {/* <h2 className="font-urbanist text-left">Records</h2> */}
      
      <div className="mx-auto w-7/12 flex flex-col items-stretch gap-4 my-10">
      {workouts.map((workout: Workout) => (
       <CardDetails key={workout._id}  {...workout} />
      ))}
    </div>

    <div className='w-5/12 container'>
        <form>

        </form>
    </div>
  </div>
  );
};

export default Home;
