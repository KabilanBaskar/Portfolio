import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./component/Home.jsx"
import AboutMe from "./component/AboutMe.jsx"
import Education from "./component/Education.jsx"
import Skills from "./component/Skills.jsx"
import Achievements from "./component/Achievements.jsx"
import Contact from "./component/Contact.jsx"
import Navbar from "./component/Navbar.jsx"
function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Achievements' element={<Achievements />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
  )
}
export default App