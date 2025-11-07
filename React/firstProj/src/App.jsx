import { useState } from 'react'
import './App.css'
import Car from './components/Car';
import Bike from './components/Bike';
import Card from './Card';
function App(){
  return(
      <div className="card-container">
        <Card 
        image = "./public/imp.png"
        title = "React Basics"
        description="Learn about compoments ,props, and state."
      />

      <Card 
        image = "./public/imp.png"
        title = "React Basics"
        description="Learn about compoments ,props, and state."
      />

      <Card 
        image = "./public/imp.png"
        title = "React Basics"
        description="Learn about compoments ,props, and state."
      />

      <Card 
        image = "./public/imp.png"
        title = "React Basics"
        description="Learn about compoments ,props, and state."
      />

      

      
      </div>
  );
}


export default App
