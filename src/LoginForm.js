import { AppContext } from "./AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const { setIsLoggedIn } = useContext(AppContext);

  function handleLoginClick() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      <h3>Please log in</h3>
      <Link to="/">
        <button onClick={handleLoginClick}>Log in</button>
      </Link>
    </div>
  );
}
