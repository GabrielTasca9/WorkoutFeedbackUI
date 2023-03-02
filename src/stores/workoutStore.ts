import { create } from "zustand";

type WorkouProps ={
    workoutValue: Workout[],
    setWorkout: (value: Workout[]) => void
}
type Workout ={
    day: string;
    description: string;
    exercises: Exercise[];
    editMode:boolean;
}

type Exercise = {
    name: string;
    weight: string;
    reps: string;
    sets: string;
}

let w: Workout[]
export const useWorkoutStore = create<WorkouProps>((set)=> ({
    workoutValue: w,
    setWorkout: (value: Workout[]) => set({workoutValue: value})
}))