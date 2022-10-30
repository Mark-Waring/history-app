import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom"
import DateSelector from "./DateSelector";
import CategoryDisplay from "./CategoryDisplay";
import EventsDisplay from "./EventsDisplay";
import { useState } from "react";

export default function Main() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

 function handleLoginClick () {
      setIsLoggedIn(true);
    } 

  if(!isLoggedIn) {
    return (
      <>
        <h3>Please log in</h3>        
        <button onClick={handleLoginClick}>Log in</button>
        
      </>
    )
    }
    return (
        <>
        <DateSelector />
        <Outlet />
        </>
    )
}