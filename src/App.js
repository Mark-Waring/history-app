import React, { useContext } from "react";
import Main from "./Main";
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./Events";
import Bookmarks from "./Bookmarks";
import NavBar from "./NavBar";
import { AppContext } from "./AppContext";


function App() {
  const {isDarkTheme} = useContext(AppContext)
  return ( 
      <Router>
        <div className={!isDarkTheme ? "" : "dark"}>
        <NavBar />
        <h1>This Day Is History</h1>
        <Routes>
          <Route path="/" element={<Main />}>            
              <Route path=":category" element={<Events />} />            
          </Route>
          <Route exact path="bookmarks" element={<Bookmarks />}/>
        </Routes>
        </div>
      </Router>
  )
}

export default App;



