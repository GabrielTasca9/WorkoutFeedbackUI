import React from 'react'
import { Workout, Exercise, Users } from '../services/api_types'
import {useLocation} from 'react-router-dom';

function Workouts() {
  const location = useLocation();

  const test = () => {
    console.log(location.state.data)
  }
  return (
    <div className="bg-slate-900 w-full min-h-screen">
    </div>
  )
}

export default Workouts
