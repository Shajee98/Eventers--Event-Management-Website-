import { Navigate, Route, Routes } from "react-router-dom"
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/home/HomePage'

function App() {

  return (
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>} />
        <Route path='/home' element={<HomePage />}/>
      </Routes>
    <Footer />
    </div>
  )
}

export default App
