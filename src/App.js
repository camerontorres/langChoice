import React from 'react';
import './App.css';
import  { BrowserRouter, Routes ,Route, useLocation } from 'react-router-dom';



import Navbar from './components/navbar';
import Home from './components/pages/Home'
import SignUp from './components/pages/About'
import Languages from './components/pages/Languages'
import Quiz from './components/pages/Quiz'
import Pricing from './components/pages/Pricing';
import Mandarin from './components/pages/languagePages/Mandarin';
import Spanish from './components/pages/languagePages/Spanish';
import French from './components/pages/languagePages/English';
import Hindi from './components/pages/languagePages/Hindi';
import Japanese from './components/pages/languagePages/Japanese';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
          <Routes>
          
              <Route exact path="/" Component={Home}/>
              <Route exact path="/SignUp" Component={SignUp}/>
              <Route exact path="/Quiz" Component={Quiz}/>
              <Route exact path="/Languages" Component={Languages}/>
              <Route  exact path="/Pricing" Component={Pricing} />

              
              <Route  exact path="/Languages/Mandarin" Component={Mandarin} />
              <Route  exact path="/Languages/Spanish" Component={Spanish} />
              <Route  exact path="/Languages/French" Component={French} />
              <Route  exact path="/Languages/Hindi" Component={Hindi} />

              <Route  exact path="/Languages/Japanese" Component={Japanese} />
              

              
          </Routes>
    </BrowserRouter>
    
    
   
    
      

    
    </>
  );
}

export default App;
