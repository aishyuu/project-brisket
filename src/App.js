import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return(
    <Routes>
      <Route path="/project-brisket" element={<Home />} />
    </Routes>
  )
}
