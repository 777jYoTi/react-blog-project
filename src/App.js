import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Bollywood from './Components/Bollywood';
import Home from './Components/Home';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import Technology from './Components/Technology';
import PageNotFound from './Components/PageNotFound';
import Navbar from './Components/Navbar';
import './App.css';


import TechnologyMain from './Components/Technology/TechnologyFullView';
import FitnessMain from './Components/Fitness/FitnessFullView';
import BollywoodMain from './Components/Bollywood/BollywoodFullView';
import HollywoodMain from './Components/Hollywood/HollywoodFullView';
import FoodMain from './Components/Food/FoodFullView';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Navbar/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/hollywood' element={<Hollywood/>}/>
      <Route path='/bollywood' element={<Bollywood/>}/>
      <Route path='/fitness' element={<Fitness/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path="/Food/:name" element={<FoodMain/>}/>
      <Route path="/Technology/:name" element={<TechnologyMain/>}></Route>
      <Route path='/Fitness/:name' element={<FitnessMain/>}></Route>
      <Route path="/Bollywood/:name" element={<BollywoodMain/>}></Route>
      <Route path='/Hollywood/:name' element={<HollywoodMain/>}></Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   </>
  );
}

export default App;
