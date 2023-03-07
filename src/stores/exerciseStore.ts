import { create } from "zustand";

type ExerciseProps ={
    exercisesValue: Exercise[],
    setExercises: (value: Exercise[]) => void
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
    editMode: boolean;
}

let e: Exercise[]
export const useExerciseStore = create<ExerciseProps>((set)=> ({
    exercisesValue: e,
    setExercises: (value: Exercise[]) => set({exercisesValue: value})
}))