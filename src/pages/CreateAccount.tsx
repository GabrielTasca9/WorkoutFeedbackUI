import React from 'react'
import { Workout, Exercise, Users } from '../services/api_types'
import {useLocation} from 'react-router-dom';
import api from '../services/api';

function CreateAccount() {
    const [canCreate, setCanCreate] = React.useState<boolean>(true);
    const[username,setUserName] = React.useState<string>("");

    const handleCreateAccount = async () => {
        setCanCreate(true)
        const response: Users[] = await api.getAllUsers();
        response.forEach(i =>{ 
            if(i.username == username){
                setCanCreate(false)
            }
            else{
                console.log(i.username)
            }
    })
        if(canCreate){
            createAccountCall();
        }
    }

    const createAccountCall = async () => {
        const create = await api.createNewUser(username)
        console.log(create.data)
    }

  return (
    <div className="bg-slate-900 w-full min-h-screen">
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              WorkoutFeedback
            </h1>
            <div className='space-y-4'>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'> Username </label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={event => setUserName(event.target.value)}></input>
              </div>
              <div>
                <button className='bg-blue-700 w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' onClick={handleCreateAccount}>Create your Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default CreateAccount
