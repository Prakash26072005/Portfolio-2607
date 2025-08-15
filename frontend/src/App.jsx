// import './App.css'
// import About from './component/About/About'
// import Contact from './component/Contact/Contact'
// import Home from './component/Home/Home'
// import Navbar from './component/Navbar/Navbar'
// import Resume from './component/Resume/Resume'
// import Skills from './component/Skill/Skill'

// function App() {

//   return (
//     <div>
//     <Navbar/>
//     <Home/>
//     <About/>
//     <Skills/>
//     <Resume/>
//     <Contact/>
//     </div>
//   )
// }

// export default App

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Resume from './component/Resume/Resume';
import Skills from './component/Skill/Skill';
import Success from './component/Success/Success'; // ✅ Import your Success page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main page with all sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Resume />
              <Contact />
            </>
          }
        />
        
        {/* Success page */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
