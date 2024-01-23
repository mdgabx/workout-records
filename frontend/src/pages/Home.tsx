import { RootState } from '../app/store';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWorkouts } from '../features/workouts/workoutSlice';

const Home = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state: RootState) => state.workout.workouts);

  useEffect(() => {
    dispatch(fetchWorkouts() as any);

    console.log(workouts)

  }, [dispatch, workouts])

  return (
    <div>
        Home
    </div>
  )
}

export default Home
