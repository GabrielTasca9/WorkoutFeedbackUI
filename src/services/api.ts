import axios from "axios";
import { Workout,Exercise, Users } from "./api_types";

class Api{
    getAllUsers = async () =>(await (axios.get('https://workoutfeedbackapi.azurewebsites.net/Users/get'))).data;

    searchByName = async (username: string) => await axios.get('https://workoutfeedbackapi.azurewebsites.net/Users/searchbyusername?username='+ username);

    createNewUser = async (username: string) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/CreateNewUser?username='+ username);

    deleteUser = async (username: string) => await axios.delete('https://workoutfeedbackapi.azurewebsites.net/Users/deleteUser');

    createWorkout = async (username: string, workout: Workout) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/createWorkout');
    
    createExercise = async (username: string, workoutday: string, exercise: Exercise) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/createExercise');

    updateExercise = async (username: string, workoutday: string, exercise: Exercise) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/updateExercise');

    updateWorkout = async (username: string, workoutday: string, newDay: string = "", newDescription: string = "") => await axios.post('https://workoutfeedbackapi.azurewebsites.net/updateWorkout');

    deleteExercise = async (username: string, workoutday: string, exerName: string) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/deleteExercise');

    deleteWorkout = async (username: string, workoutday: string) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/deleteWorkout');
}

export default new Api(); 