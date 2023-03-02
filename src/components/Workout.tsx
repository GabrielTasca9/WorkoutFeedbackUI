import { useState } from "react"
import { useWorkoutStore } from "../stores/workoutStore"
import {FaEdit} from "react-icons/fa"
import {MdOutlineArrowDropDown} from "react-icons/md"
import { Workouts } from "../services/api_types"

export const Workout = () => {
    const {workoutValue, setWorkout} = useWorkoutStore((state) => ({workoutValue: state.workoutValue, setWorkout:state.setWorkout}))
    const [inputDay, setInputDay] = useState<string>("")

    
    const handleClickDropdown = (index: number) => {
        console.log(workoutValue[index])
    }

    const handleEdit = (workout: Workouts, index: number) => {
        workout.editMode = !(workout.editMode)
        let w = workoutValue
        w[index] = workout
        setWorkout(w)
    }

    return (
        <div className='flex flex-col items-center w-full justify-center p-6 md:h-100'>
            <div className='flex flex-col items-center justify-center: initial sm:justify-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700 dark:border-gray-700'>
                {workoutValue.map((item,index) => (
                    <div className="flex flex-row w-full" key={index}>
                        {item.editMode 
                        ? <input className="flex justify-start w-full p-6" defaultValue={item.day} onChange={event => setInputDay(event.target.value)}></input>
                        : <h3 className="flex justify-start w-full text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white p-6">{item.day}</h3>
                        }
                        <div className="flex items-center" onClick={e => handleEdit(item,index)}>
                            <FaEdit size={28} color="white"/>
                        </div>
                        <div className="flex items-center" onClick={e => handleClickDropdown(index)}>
                            <MdOutlineArrowDropDown size={42} color='white'></MdOutlineArrowDropDown>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}