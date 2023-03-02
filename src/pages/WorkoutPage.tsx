import React, { useEffect, useState } from 'react'
import { Workouts, Exercise, Users } from '../services/api_types'
import { useLocation } from 'react-router-dom';
import { Workout } from '../components/Workout';
import { useUserStore } from '../stores/userStore';

function WorkoutPage() {
  const userValue = useUserStore((state) => state.userValue)

  return (
    <div className="bg-slate-900 w-full min-h-screen">
      <div className='flex flex-col w-full items-center justify-center p-5 lg:py-0'>
        <div className='flex flex-col items-center justify-center w-full bg-white rounded-lg shadow dark:border md:mt-5 xl:p-0 dark:bg-gray-800 dark:border-gray-700 md:w-1/2'>
          <h2 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white p-6'>
            {userValue.username}
          </h2>
          <Workout/>
        </div>
      </div>
    </div>
  )
}

export default WorkoutPage
