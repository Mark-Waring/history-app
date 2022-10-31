import React from "react";
import Main from "./Main";
import ContentDisplay from "./ContentDisplay";
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
          <Route exact path="bookmarks" element={<Bookmarks />}/>
          <Route path="/" element={<Main />}>
            <Route path=":date" element={<ContentDisplay />}>
              <Route path=":category" element={<EventsDisplay />} />
            </Route>
          </Route>
        </Routes>
      </Router> 
  )
}

export default App;



