import { useEffect, useState } from "react"
import { useWorkoutStore } from "../stores/workoutStore"
import {FaEdit, FaTrash} from "react-icons/fa"
import {MdOutlineArrowDropDown} from "react-icons/md"
import { Exercise, Workouts } from "../services/api_types"
import { useExerciseStore } from "../stores/exerciseStore"
import { useSingleWorkoutStore } from "../stores/singleWorkoutStore"
import { useUserStore } from "../stores/userStore"
import { useErrorMessageStore } from "../stores/errorStore"

export const Error = () => {
    const erroMessage = useErrorMessageStore((state) => state.errorMessageValue)

    return (
        <div className='flex w-full rounded p-3 bg-red-500'>
            <h3 className="flex items-center">{erroMessage}</h3>
        </div>
    )
}