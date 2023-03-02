export type Workouts ={
    day: string;
    description: string;
    exercises: Exercise[];
    editMode: boolean;
}
export type Exercise = {
    name: string;
    weight: string;
    reps: string;
    sets: string;
}
export type Users ={
    id: string;
    username: string;
    workouts: Workouts[];
}
