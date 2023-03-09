import { useEffect, useState } from "react"
import { useWorkoutStore } from "../stores/workoutStore"
import {FaEdit, FaTrash} from "react-icons/fa"
import {MdOutlineArrowDropDown} from "react-icons/md"
import { Exercise, Workouts } from "../services/api_types"
import { useExerciseStore } from "../stores/exerciseStore"
import { useSingleWorkoutStore } from "../stores/singleWorkoutStore"
import { useUserStore } from "../stores/userStore"

export const ExerciseDropdown = () => {
    const {exercisesValue, setExercises} = useExerciseStore((state) => ({exercisesValue: state.exercisesValue, setExercises: state.setExercises}))
    const singleWorkoutValue = useSingleWorkoutStore((state) => state.singleWorkoutValue)
    const userValue = useUserStore((state) => state.userValue)
    
    const handleEditExercise = async(exercise: Exercise, index: number) => {
        exercise.editMode = !(exercise.editMode)
        let w = exercisesValue
        w[index] = exercise
        setExercises(w)
    }
    
    const handleDeleteExercise = (exercise: Exercise) => {
        console.log("Delete")
    }

    return (
        <div className='flex flex-col items-center w-full justify-center p-6 md:h-100'>
            <h3 className="flex justify-center w-full text-xl font-bold leading-tight tracking-tight md:text-2x2 text-white p-1">{singleWorkoutValue.description}</h3>
            <div className="flex flex-row w-full">
                <span className="flex text-white justify-center w-1/2 p-2">Nome</span>
                <span className="flex text-white justify-center w-1/6 p-2">Peso</span>
                <span className="flex text-white justify-center w-1/6 p-2">Sets</span>
                <span className="flex text-white justify-center w-1/6 p-2">Reps</span>
                <a className="flex justify-start w-1/4"></a>
            </div>
            <div className='flex flex-col items-center justify-center: initial sm:justify-center w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-600 border-gray-700'>
                {exercisesValue.map((item,index) => (
                    <div className="flex flex-row w-full" key={index}>
                        <div className="flex flex-row w-full" key={index}>
                            {item.editMode 
                            ?
                            <>
                             <input className="flex justify-start w-1/2 p-2" defaultValue={item.name} ></input>
                             <input className="flex justify-start w-1/6 p-2" defaultValue={item.weight} ></input>
                             <input className="flex justify-start w-1/6 p-2" defaultValue={item.sets} ></input>
                             <input className="flex justify-start w-1/6 p-2" defaultValue={item.reps} ></input>
                            </>
                            : 
                            <>
                                <h4 className="flex justify-start truncate hover:text-clip text-xl w-1/2 leading-tight tracking-tight md:text-2x2 text-white p-2">{item.name}</h4>
                                <h4 className="flex justify-start text-xl w-1/6 leading-tight tracking-tight md:text-2x2 text-white p-2">{item.weight}</h4>
                                <h4 className="flex justify-start text-xl w-1/6 leading-tight tracking-tight md:text-2x2 text-white p-2">{item.sets}</h4>
                                <h4 className="flex justify-start text-xl w-1/6 leading-tight tracking-tight md:text-2x2 text-white p-2">{item.reps}</h4>
                            </>
                            }
                            <div className="flex items-center p-1/2" onClick={e => handleEditExercise(item,index)}>
                                <FaEdit size={28} color="white"/>
                            </div>
                            <div className="flex items-center p-1" onClick={e => handleDeleteExercise(item)}>
                                <FaTrash size={28} color="white"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}