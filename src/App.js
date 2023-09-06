import React from 'react'
import Navbar from './components/NavBar.js'
import News from './components/News.js'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

const App =() => {
  const pagesize= 5;
  // const apiKey = process.env.REACT_APP_NEWS_API
  const apiKey = '519cb3216a01417bab77e9c3f37fc11c'




  
return (
    <Router>
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<News  key="Home" pageSize={pagesize}  apiKey={apiKey}/>} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;



