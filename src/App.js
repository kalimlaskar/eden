import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome';
import Homework from './components/Homework';
import Planning from './components/Planning';
import Congrts from './components/Congratulations';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/eden" element={<Welcome />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/home-work" element={<Homework />}></Route>
        <Route path="/planning" element={<Planning />}></Route>
        <Route path="/congratulations" element={<Congrts />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
