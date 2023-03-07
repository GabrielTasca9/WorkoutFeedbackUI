export type Workouts ={
    day: string;
    description: string;
    exercises: Exercise[];
    editMode: boolean;
    openDropdown: boolean;
}
export type Exercise = {
    name: string;
    weight: string;
    reps: string;
    sets: string;
    editMode: boolean;
}
export type Users ={
    id: string;
    username: string;
    workouts: Workouts[];
}
