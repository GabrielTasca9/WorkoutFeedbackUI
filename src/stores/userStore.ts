import { create } from "zustand";

type UserProps ={
    userValue: Users,
    setUser: (value: Users) => void
}
type Workout ={
    day: string;
    description: string;
    exercises: Exercise[];
}

type Exercise = {
    name: string;
    weight: string;
    reps: string;
    sets: string;
    editMode: boolean;
}

export type Users ={
    id: string;
    username: string;
    workouts: Workout[];
}


let u: Users
export const useUserStore = create<UserProps>((set)=> ({
    userValue: u,
    setUser: (value: Users) => set({userValue: value})
}))