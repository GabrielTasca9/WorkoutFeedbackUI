import React, { useState } from 'react'
import { Workouts, Exercise, Users } from '../services/api_types'
import {useLocation, useNavigate} from 'react-router-dom';
import api from '../services/api';
import { useErrorMessageStore } from '../stores/errorStore';
import {Error} from '../components/Error'

function CreateAccount() {
    const navigate = useNavigate();
    const[username,setUserName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const {errorMessage, setErrorMessage} = useErrorMessageStore((state) =>  ({errorMessage: state.errorMessageValue, setErrorMessage: state.setErrorMessage}))


    const handleCreateAccount = async () => {
        const response: Users[] = await api.getAllUsers();
        createAccountCall();

    }

    const createAccountCall = async () => {
        const create = await api.createNewUser(username)
        console.log(create.data)
        if(create.data == "Error: Id already been used"){
          setError(true)
          setErrorMessage("This name already exists")
        }else{
          navigate('/')
        }
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
              {error && (
                <Error/>
              )}
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
