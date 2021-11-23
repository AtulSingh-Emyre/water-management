import './App.css';
import Sidebar from './Components/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar active = {'dashboard'}    children = {<Dashboard />} />} />
        <Route path="/Dashboard" element={<Sidebar active = {'dashboard'}    children = {<Dashboard />} />} />
      </Routes>
  </Router>
  );
}

export default App;
