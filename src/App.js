import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import CategoryDisplay from "./CategoryDisplay";
import EventsDisplay from "./EventsDisplay";
import Main from "./Main";
import { AppProvider } from "./AppContext";



function App() {
  

  return (    
        <Router>     
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="events" element={<CategoryDisplay />}>
                <Route path=":type" element={<EventsDisplay />} />
              </Route>
            </Route>
          </Routes>
        </Router>      
  )
}

export default App;



