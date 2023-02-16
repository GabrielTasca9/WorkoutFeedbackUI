import axios from "axios";
import { Workout,Exercise, Users } from "./api_types";

class Api{
    getAllUsers = async (): Promise<Users[]> =>(await (axios.get('https://localhost:7155/Users/get'))).data;

    searchByName = async (username: string) => await axios.get('https://localhost:7155/Users/searchbyusername?username='+ username);

    createNewUser = async (username: string) => await axios.post('https://localhost:7155/Users/createNewUser');

    deleteUser = async (username: string) => await axios.delete('https://localhost:7155/Users/deleteUser');

    createWorkout = async (username: string, workout: Workout) => await axios.post('https://localhost:7155/Users/createWorkout');
    
    createExercise = async (username: string, workoutday: string, exercise: Exercise) => await axios.post('https://localhost:7155/Users/createExercise');

    updateExercise = async (username: string, workoutday: string, exercise: Exercise) => await axios.post('https://localhost:7155/Users/updateExercise');

    updateWorkout = async (username: string, workoutday: string, newDay: string = "", newDescription: string = "") => await axios.post('https://localhost:7155/Users/updateWorkout');

    deleteExercise = async (username: string, workoutday: string, exerName: string) => await axios.post('https://localhost:7155/Users/deleteExercise');

    deleteWorkout = async (username: string, workoutday: string) => await axios.post('https://localhost:7155/Users/deleteWorkout');
}

export default new Api(); 