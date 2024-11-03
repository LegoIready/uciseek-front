import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Landing from "./Landing"
import Quiz from "./Quiz"
import FinalScore from './FinalScore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/final" element={<FinalScore />} />
      </Routes>
    </Router>
  );
}

export default App;

