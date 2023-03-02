import { useState } from "react"
import { useWorkoutStore } from "../stores/workoutStore"
import {FaEdit} from "react-icons/fa"
import {MdOutlineArrowDropDown} from "react-icons/md"
import { Exercise, Workouts } from "../services/api_types"

export const ExerciseDropdown = () => {
    const {workoutValue, setWorkout} = useWorkoutStore((state) => ({workoutValue: state.workoutValue, setWorkout:state.setWorkout}))
    const [exercises,setExercises] = useState<Exercise>()

    const populateExercise = () => {
        
    }
    return (
        <div className='flex flex-col items-center w-full justify-center p-6 md:h-100'>
            <div className='flex flex-col items-center justify-center: initial sm:justify-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700 dark:border-gray-700'>
                {workoutValue.map((item,index) => (
                    <div className="flex flex-row w-full" key={index}>
                    </div>
                ))}
            </div>

        </div>
    )
}