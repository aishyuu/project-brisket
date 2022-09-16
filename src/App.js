import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import MoveList from './pages/MoveList';

export default function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movelist" element={<MoveList />} />
    </Routes>
  )
}
