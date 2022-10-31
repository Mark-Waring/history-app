import { AppContext } from "./AppContext";
import { useContext } from "react";

export default function LoginForm() {
    const app = useContext(AppContext);

    function handleLoginClick() {
        app.setIsLoggedIn(true)
    }
    
    return (
      <div className="login-form">
        <h3 className="login-items">Please log in</h3>
        <button className="login-items login-button" onClick={handleLoginClick}>Log in</button>
      </div>
    )
  }