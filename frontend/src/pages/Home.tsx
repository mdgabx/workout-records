import { RootState } from '../app/store';
import { useEffect, useState } from 'react';
import { deleteWorkout, fetchWorkouts, Workout } from '../features/workouts/workoutSlice';
import CardDetails from '../components/CardDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import EditModal from '../components/EditModal';
import PageLoader from '../components/Loader/PageLoader';

const Home = () => {
  const dispatch = useAppDispatch();
  const workouts = useAppSelector((state: RootState) => state.workout.workouts)
  const status = useAppSelector((state: RootState) => state.workout.status)
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>()

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  useEffect(() => {
    console.log('Workouts updated:', workouts);
  }, [workouts]);

  const handleDelete = (workoutId?: string) => {
    if(workoutId) {
      dispatch(deleteWorkout(workoutId))
    }
  }
  
  const handleEdit = (workout: Workout) => {
    setSelectedWorkout(workout)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="flex w-full px-10 flex-row items-start justify-between gap-x-4">
      { status === 'loading' ? (<PageLoader />) : (
        <>
      
         <div className="mx-auto w-7/12 flex flex-col items-stretch gap-4 my-10">
         {workouts.map((workout: Workout) => (
           <div className="container-fluid" key={workout._id}>
              <CardDetails 
               {...workout} 
               onDelete={() => handleDelete(workout._id)}
               onEdit={() => handleEdit(workout)}
             />
   
             { showModal && selectedWorkout &&
               <EditModal {...selectedWorkout} closeModal={closeModal} />
             }
           </div>
         ))
         }
       </div>
   
       <WorkoutForm />
       </>
      )  
      }
  </div>
  );
};

export default Home;
