import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ImageCard from './Components/ImageCard/ImageCard';

function App() {
  return (
    <div className='grid'>
      	<Header/>
        <ImageCard/>
        <Footer/>
    </div>
  );
}

export default App;
