import React from 'react'
import './App.css';

import { Routes, Route} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'

const App = () => (
  
  <div>
  <Routes>
    <Route path='/' element={<HomePage />} />
    {/* <Route path='/' element={<HomePage />} /> */}
  </Routes>
    
  </div>

)

export default App;