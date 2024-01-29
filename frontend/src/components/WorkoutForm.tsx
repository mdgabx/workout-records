import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { createWorkout, WorkoutCreate } from '../features/workouts/workoutSlice';
import { RootState } from '../app/store';
import { useForm, SubmitHandler } from 'react-hook-form';

interface WorkoutFormProps {}

const WorkoutForm: React.FC<WorkoutFormProps> = () => {
  const dispatch = useAppDispatch();
  const workouts = useAppSelector((state: RootState) => state.workout.workouts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkoutCreate>();

  const onSubmit: SubmitHandler<WorkoutCreate> = (data) => {
    console.log(data);
    dispatch(createWorkout(data));
    reset(); // Reset the form after submission
  };

  useEffect(() => {
    // Reset the form when workouts change
    reset({
      title: '',
      reps: 0,
      load: 0,
    });
  }, [workouts, reset]);

  return (
    <div className='w-full md:w-5/12 container my-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-start justify-center p-10 gap-4 bg-white shadow border-gray-200 rounded-md'
      >
        <h3 className='text-3xl'>Record a workout</h3>

        <label>Exercise Title:</label>
        <input
          type='text'
          {...register('title', { required: 'Title is required' })}
          className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
        />
        {errors.title && <span className='text-red-500 font-urbanist'>{errors.title.message}</span>}

        <label>Load (in kg):</label>
        <input
          type='number'
          {...register('load', { valueAsNumber: true })}
          className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
        />

        <label>Reps:</label>
        <input
          type='number'
          {...register('reps', { valueAsNumber: true })}
          className='w-full px-2 py-1 rounded-md ring-1 ring-inset ring-gray-300 text-gray-700'
        />

        <button
          className='mx-auto rounded-lg py-2 px-4 bg-green-700 text-white shadow hover:bg-white hover:text-black'
          type='submit'
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
