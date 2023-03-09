import { useState } from "react"
import { useWorkoutStore } from "../stores/workoutStore"
import {FaEdit} from "react-icons/fa"
import {MdOutlineArrowDropDown} from "react-icons/md"
import { Workouts } from "../services/api_types"
import { ExerciseDropdown } from "./ExerciseDropdown"
import { useExerciseStore } from "../stores/exerciseStore"
import { useSingleWorkoutStore } from "../stores/singleWorkoutStore"
import api from "../services/api"
import { useUserStore } from "../stores/userStore"
import { useNavigate } from 'react-router-dom';


export const Workout = () => {
    const {workoutValue, setWorkout} = useWorkoutStore((state) => ({workoutValue: state.workoutValue, setWorkout:state.setWorkout}))
    const navigate = useNavigate();
    const userValue = useUserStore((state) => state.userValue)
    const [inputDay, setInputDay] = useState<string>("")
    const [workoutDayInput, setWorkoutDayInput] = useState<string>("")
    const [workoutDescriptionInput, setworkoutDescriptionInput] = useState<string>("")
    const [createWorkout, setCreateWorkout] = useState<boolean>(false)
    const {exercisesValue, setExercises} = useExerciseStore((state) => ({exercisesValue: state.exercisesValue, setExercises: state.setExercises}))
    const {singleWorkoutValue, setSingleWorkout} = useSingleWorkoutStore((state) => ({singleWorkoutValue: state.singleWorkoutValue, setSingleWorkout:state.setSingleWorkout}))

    const handleOpenDropdown = (workout: Workouts, index: number) => {
        workout.openDropdown = !(workout.openDropdown)
        let w = workoutValue
        w[index] = workout
        let count = 0
        for(let wAux of w){
            if(wAux.day != workout.day){
                wAux.openDropdown = false
                w[count] = wAux
            }
            count++
        }
        setWorkout(w)
        workoutValue.forEach(i => i.day == workout.day ? setExercises(i.exercises) : "")
        changeSingleWorkout(workout.day)
    }

    const changeSingleWorkout = (day: string) => {
        workoutValue.forEach(i => i.day == day ? setSingleWorkout(i) : "")
    }

    const handleCreateWorkout = async() => {
        const w: Workouts = {day: workoutDayInput, description: workoutDescriptionInput, exercises: [], editMode: false, openDropdown: false}
        const response = await api.createWorkout(userValue.username, w)
        console.log(response.data)

        navigate('/')
    }
    
    
    const handleEditWorkout = (workout: Workouts, index: number) => {
        workout.editMode = !(workout.editMode)
        let w = workoutValue
        w[index] = workout
        setWorkout(w)
    }

    

    return (
        <div className='flex flex-col items-center w-full justify-center p-6 md:h-100'>
            <div className='flex flex-col justify-items-start sm:justify-center w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-700 border-gray-700'>
                {workoutValue.length == 0 && (
                    <div className="flex flex-col items-center w-full justify-center p-6 md:h-100">
                        <h3 className="flex justify-center w-full text-xl font-bold leading-tight tracking-tight md:text-2x2 text-white p-3">{"Don't have any workout yet"}</h3>
                        <div>
                            <button className='bg-blue-700 w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm p-3 text-center' onClick={(e => setCreateWorkout(!createWorkout))}>Create Workout</button>
                        </div>
                        {createWorkout && (
                        <div className="flex flex-col items-center w-full justify-center p-6 md:h-100">
                            <label className='block mb-2 text-sm font-medium  text-white'>Workout Day</label>
                            <input className='bg-gray-50 border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500' onChange={event => setWorkoutDayInput(event.target.value)}></input>
                            <label className='block mb-2 text-sm font-medium  text-white'>Workout Description</label>
                            <input className='bg-gray-50 border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500' onChange={event => setworkoutDescriptionInput(event.target.value)}></input>
                            <button className='bg-blue-700 w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm p-3 text-center py-2' onClick={(e => handleCreateWorkout())}>Save</button>
                         </div>
                        )}
                    </div>
                )}
                {workoutValue.map((item,index) => (
                    <div className="w-full">
                        <div className="flex flex-row w-full" key={index}>
                            {item.editMode 
                            ? <input className="flex justify-start w-full p-6" defaultValue={item.day} onChange={event => setInputDay(event.target.value)}></input>
                            : <h3 className="flex justify-start w-full text-xl font-bold leading-tight tracking-tight md:text-2xl text-white p-6">{item.day}</h3>
                            }
                            <div className="flex items-center" onClick={e => handleEditWorkout(item,index)}>
                                <FaEdit size={28} color="white"/>
                            </div>
                            <div className="flex items-center" onClick={e => handleOpenDropdown(item,index)}>
                                <MdOutlineArrowDropDown size={42} color='white'></MdOutlineArrowDropDown>
                            </div>
                        </div>
                        {item.openDropdown 
                        ? <ExerciseDropdown></ExerciseDropdown>
                        : ""
                        }
                    </div>
                ))}
            </div>

        </div>
    )
}