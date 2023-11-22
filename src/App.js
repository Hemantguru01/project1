import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import StylishSearchBar from './StylishSearchBar';
import GardeningList from './GardeningList';
const App = () => {
  return (
    <><div className="App">
      <Navbar />
      {/* Your main content goes here */}
      <main>
        <h2>Main Content</h2>
        
        
        {/* Add your main content components */}
      </main>

    </div><></>
        <div className="App">
        
        </div>
        <div className="App">
          <StylishSearchBar>
            
          </StylishSearchBar>
        </div>
    <div className="App">
        <Home>

        </Home>
       <div>
        <GardeningList>

          
        </GardeningList>
       </div>
        <div className="app">
          <Footer>
            
          </Footer>
        </div>
       
      </div></>
  );
};
export default App;