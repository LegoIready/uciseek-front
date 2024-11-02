import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Landing from "./Landing"
import Quiz from "./Quiz"
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        {/* <Route path="/quiz" element={<Quiz />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

