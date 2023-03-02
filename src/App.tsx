import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workout from './pages/WorkoutPage';
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount';
import WorkoutPage from './pages/WorkoutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/workout" element={<WorkoutPage />}/>
        <Route path="/create" element={<CreateAccount />}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>


    // <div className="bg-slate-900 w-full min-h-screen">
    //   <Login></Login>
    // </div>
  )
}

export default App
