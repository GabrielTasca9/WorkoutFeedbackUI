import { create } from "zustand";

type WorkouProps ={
    singleWorkoutValue: Workout,
    setSingleWorkout: (value: Workout) => void
}
type Workout ={
    day: string;
    description: string;
    exercises: Exercise[];
    editMode: boolean;
    openDropdown: boolean;
}

type Exercise = {
    name: string;
    weight: string;
    reps: string;
    sets: string;
    editMode:boolean;
}

let w: Workout
export const useSingleWorkoutStore = create<WorkouProps>((set)=> ({
    singleWorkoutValue: w,
    setSingleWorkout: (value: Workout) => set({singleWorkoutValue: value})
}))