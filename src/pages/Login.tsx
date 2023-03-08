import React from 'react'
import api from '../services/api'
import { Exercise, Users, Workouts } from '../services/api_types'
import { useNavigate } from 'react-router-dom';
import { useWorkoutStore } from '../stores/workoutStore';
import { useUserStore } from '../stores/userStore';

function Login() {
  const [username, setUserName] = React.useState<string>("");
  const navigate = useNavigate();
  const {workoutValue, setWorkout} = useWorkoutStore((state) => ({workoutValue: state.workoutValue, setWorkout:state.setWorkout}))
  const {userValue, setUser} = useUserStore((state) => ({userValue: state.userValue, setUser:state.setUser}))

  const handleSignIn = async () => {
    const response = await api.searchByName(username);
    const user: Users = {id: response.data.id, username: response.data.username, workouts: response.data.workouts}
    setUser(user)
    const data = user.workouts.map((workout: { day: string; description: string; exercises: Exercise[];}) =>(
      {
        day: workout.day,
        description: workout.description,
        exercises: workout.exercises,
        editMode:false,
        openDropdown: false,
      }
    ));
    setWorkout(data)
    navigate('/workout')
  }
  
  const handleCreateAccount = async () => {
    navigate('/create')
  }
  return (
    <div className="bg-slate-900 w-full min-h-screen">
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              WorkoutFeedback
            </h1>
            <div className='space-y-4'>
              <div>
                <label className='block mb-2 text-sm font-medium  text-white'> Your username</label>
                <input className='bg-gray-50 border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500' onChange={event => setUserName(event.target.value)}></input>
              </div>
              <div>
                <button className='bg-blue-700 w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ' onClick={handleSignIn}>Sign In</button>
              </div>
              <div>
                <a className='flex justify-center font-medium text-blue-600 hover:underline' onClick={handleCreateAccount}>Create Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
