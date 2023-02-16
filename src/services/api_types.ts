export type Workout ={
    day: string;
    description: string;
    exercises: Exercise[];
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
    workouts: Workout[];
}
