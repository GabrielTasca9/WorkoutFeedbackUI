import React, { useEffect, useState } from 'react'
import { Workout, Exercise, Users } from '../services/api_types'
import {useLocation} from 'react-router-dom';

function Workouts() {
  const location = useLocation();
  const [data,setData] = useState<Users>(location.state.data)

  useEffect(() => {
    console.log(data.workouts)
  });
  return (
    <div className="bg-slate-900 w-full min-h-screen">
      <ul>
        {data.workouts.map((item,index) => (
          <div key={index}>
            <li>{item.day}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Workouts
