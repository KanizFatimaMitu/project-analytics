import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import Team from './Pages/Team';
import Reviews from './Pages/Reviews';
import Exist from './Pages/Exist';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Analytics></Analytics>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/exist" element={<Exist></Exist>}></Route>
      </Routes>
    </div>
  );
}

export default App;
