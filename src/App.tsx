import React from 'react';
import Header from './components/Header';
import { DataProvider } from './context/dataProvider';
import Home from './pages/Home';


function App() {


  
  return (
    <DataProvider>
      <div className="App">
        <Header />
        <Home/> 
      </div>
    </DataProvider>

  );
}

export default App;
