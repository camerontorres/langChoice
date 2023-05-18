
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';



import Navbar from './components/navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Languages from './components/pages/Languages'
import Quiz from './components/pages/Quiz'
import LangDetail from './components/pages/LangDetail';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
          <Routes>
              <Route exact path="/" Component={Home}/>
              <Route exact path="/About" Component={About}/>
              <Route exact path="/Quiz" Component={Quiz}/>
              <Route exact path="/Languages" Component={Languages}/>
              <Route  exact path="/Languages/:name" Component={LangDetail} />
          </Routes>
    </BrowserRouter>
    
    
   
    
      

    
    </>
  );
}

export default App;
