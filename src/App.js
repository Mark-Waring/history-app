import React from "react";
import Main from "./Main";
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsDisplay from "./EventsDisplay";
import Bookmarks from "./Bookmarks";
import NavBar from "./NavBar";


function App() {
  
  return ( 
      <Router>
        <NavBar />
        <h1>This Day is History</h1>
        <Routes>
          <Route path="/" element={<Main />}>            
              <Route path=":category" element={<EventsDisplay />} />            
          </Route>
          <Route exact path="bookmarks" element={<Bookmarks />}/>
        </Routes>
      </Router>
  )
}

export default App;



