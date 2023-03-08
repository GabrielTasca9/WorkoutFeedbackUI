import { useState } from "react"
import { useWorkoutStore } from "../stores/workoutStore"
import {FaEdit} from "react-icons/fa"
import {MdOutlineArrowDropDown} from "react-icons/md"
import { Workouts } from "../services/api_types"
import { ExerciseDropdown } from "./ExerciseDropdown"
import { useExerciseStore } from "../stores/exerciseStore"
import { useSingleWorkoutStore } from "../stores/singleWorkoutStore"


export const Workout = () => {
    const {workoutValue, setWorkout} = useWorkoutStore((state) => ({workoutValue: state.workoutValue, setWorkout:state.setWorkout}))
    const [inputDay, setInputDay] = useState<string>("")
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
    
    const handleEdit = (workout: Workouts, index: number) => {
        workout.editMode = !(workout.editMode)
        let w = workoutValue
        w[index] = workout
        setWorkout(w)
    }

    return (
        <div className='flex flex-col items-center w-full justify-center p-6 md:h-100'>
            <div className='flex flex-col justify-items-start sm:justify-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700 dark:border-gray-700'>
                {workoutValue.map((item,index) => (
                    <div className="w-full">
                        <div className="flex flex-row w-full" key={index}>
                            {item.editMode 
                            ? <input className="flex justify-start w-full p-6" defaultValue={item.day} onChange={event => setInputDay(event.target.value)}></input>
                            : <h3 className="flex justify-start w-full text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white p-6">{item.day}</h3>
                            }
                            <div className="flex items-center" onClick={e => handleEdit(item,index)}>
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