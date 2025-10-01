import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Homepage from "./pages/Homepage/Homepage.jsx"
import Header from './components/Header/Header.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App