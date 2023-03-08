import axios from "axios";
import { Workouts,Exercise, Users } from "./api_types";

class Api{
    getAllUsers = async () =>(await (axios.get('https://workoutfeedbackapi.azurewebsites.net/Users/get'))).data;

    searchByName = async (username: string) => await axios.get('https://workoutfeedbackapi.azurewebsites.net/Users/searchbyusername?username='+ username);

    createNewUser = async (username: string) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/CreateNewUser?username='+ username);

    deleteUser = async (username: string) => await axios.delete('https://workoutfeedbackapi.azurewebsites.net/Users/deleteUser?username=' + username);

    createWorkout = async (username: string, workout: Workouts) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/createWorkout?username=' + username + '&day=' + workout.day + '&description=' + workout.description);
    
    createExercise = async (username: string, workoutday: string, exercise: Exercise) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/createExercise?username=' + username + '&workoutDay=' + workoutday + '&Name=' + exercise.name + '&Weight=' + exercise.weight + '&Reps=' + exercise.reps + '&Sets=' + exercise.sets);

    updateExercise = async (username: string, workoutday: string, exercise: Exercise) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/updateExercise?username=' + username + '&workoutDay=' + workoutday + '&Name=' + exercise.name + '&Weight=' + exercise.weight + '&Reps=' + exercise.reps + '&Sets=' + exercise.sets);

    updateWorkout = async (username: string, workoutday: string, newDay: string = "", newDescription: string = "") => await axios.post('https://workoutfeedbackapi.azurewebsites.net/updateWorkoutusername=' + username + '&workoutDay=' + workoutday + '&newDay=' + newDay + '&newDescription=' + newDescription);

    deleteExercise = async (username: string, workoutday: string, exerName: string) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/deleteExercise?username=' + username + '&workoutDay=' + workoutday + '&exercName=' + exerName );

    deleteWorkout = async (username: string, workoutday: string) => await axios.post('https://workoutfeedbackapi.azurewebsites.net/Users/deleteWorkout?username=' + username + '&workoutDay=' + workoutday);
}

export default new Api(); 