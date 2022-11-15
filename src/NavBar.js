import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import LightModeIcon from "./LightModeIcon";

export default function NavBar() {
  const { isLoggedIn, setIsLoggedIn, bookmarks, setSelectedDate } =
    useContext(AppContext);

  function handleLogoutClick() {
    setIsLoggedIn(false);
    setSelectedDate("01/01");
  }

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <Link to="/" className="nav-items">
          Home
        </Link>
      </div>
      <div className="nav-right">
        {<LightModeIcon />}
        <Link to="/bookmarks" className="nav-items">
          {bookmarks.length === 0 || !isLoggedIn
            ? "Bookmarks"
            : `Bookmarks (${bookmarks.length})`}
        </Link>
        {isLoggedIn && (
          <Link to="/" className="nav-items" onClick={handleLogoutClick}>
            Log out
          </Link>
        )}
      </div>
    </nav>
  );
}
