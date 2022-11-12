import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useEffect } from "react"
import LightModeIcon from "./LightModeIcon"

export default function NavBar () {
    const { isDarkTheme, isLoggedIn, setIsLoggedIn, setBookmarks, bookmarks, setSelectedDate  } = useContext(AppContext);

    function handleLogoutClick() {
        setIsLoggedIn(false)
        setBookmarks([])
        setSelectedDate("");
    }

    useEffect(() => {
        if (isDarkTheme) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [isDarkTheme]);

    return (
        <nav className="nav-bar">
            {isLoggedIn && <Link to="/" className="nav-items nav-home" onClick={handleLogoutClick}>
              Log out
            </Link>}
            {bookmarks.length > 0 && <Link to="/bookmarks" className="nav-items">Bookmarks ({bookmarks.length})</Link>}
            {bookmarks.length === 0 && <Link to="/bookmarks" className="nav-items">Bookmarks</Link>}
            {<LightModeIcon/>}
            <Link to="/" onClick={() => setSelectedDate("")}>
              Home
            </Link>          
        </nav>
        )
}