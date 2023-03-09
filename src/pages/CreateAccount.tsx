import React from 'react'
import { Workouts, Exercise, Users } from '../services/api_types'
import {useLocation, useNavigate} from 'react-router-dom';
import api from '../services/api';

function CreateAccount() {
    const [canCreate, setCanCreate] = React.useState<boolean>(true);
    const navigate = useNavigate();
    const[username,setUserName] = React.useState<string>("");

    const handleCreateAccount = async () => {
        setCanCreate(true)
        const response: Users[] = await api.getAllUsers();
        response.forEach(i =>{ 
            if(i.username == username){
                setCanCreate(false)
            }
    })
        if(canCreate){
            createAccountCall();
        }
        navigate('/')
    }

    const createAccountCall = async () => {
        const create = await api.createNewUser(username)
        console.log(create.data)
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
                <label className='block mb-2 text-sm font-medium text-white'> Username </label>
                <input className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500' onChange={event => setUserName(event.target.value)}></input>
              </div>
              <div>
                <button className='bg-blue-700 w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centerbg-primary-600' onClick={handleCreateAccount}>Create your Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default CreateAccount
