
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';



import Navbar from './components/navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Languages from './components/pages/Languages'
import Quiz from './components/pages/Quiz'
import Pricing from './components/pages/Pricing';
import Mandarin from './components/pages/languagePages/Mandarin';
import Spanish from './components/pages/languagePages/Spanish';
import English from './components/pages/languagePages/English';
import Hindi from './components/pages/languagePages/Hindi';
import Japanese from './components/pages/languagePages/Japanese';




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
              <Route  exact path="/Pricing" Component={Pricing} />

              
              <Route  exact path="/Languages/Mandarin" Component={Mandarin} />
              <Route  exact path="/Languages/Spanish" Component={Spanish} />
              <Route  exact path="/Languages/English" Component={English} />
              <Route  exact path="/Languages/Hindi" Component={Hindi} />

              <Route  exact path="/Languages/Japanese" Component={Japanese} />
              

              
          </Routes>
    </BrowserRouter>
    
    
   
    
      

    
    </>
  );
}

export default App;
