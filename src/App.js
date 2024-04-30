
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return(
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />

          
        </Routes>
      </Router>
    </>
  )
}
export default App;