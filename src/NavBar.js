import { Link} from "react-router-dom"
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
        <Link to="/" className="nav-home" onClick={() => setSelectedDate("")}>
          Home
        </Link>  
        <Link to="/" >
          {isLoggedIn && <div onClick={handleLogoutClick} className="nav-items">Log out</div>}
        </Link>
        <Link to="/bookmarks">
          {bookmarks.length > 0 && <div className="nav-items">Bookmarks ({bookmarks.length})</div>}
          {bookmarks.length === 0 && <div className="nav-items">Bookmarks</div>}
        </Link>
        {<LightModeIcon/>} 
        </nav>
    )
}
