import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import LightModeIcon from "./LightModeIcon"

export default function NavBar () {
    const { isLoggedIn, setIsLoggedIn, setBookmarks, bookmarks, setSelectedDate  } = useContext(AppContext);

    function handleLogoutClick() {
        setIsLoggedIn(false)
        setBookmarks([])
        setSelectedDate("");
    }

    return (
        <nav className="nav-bar">
            {isLoggedIn && <Link to="/" className="nav-items" onClick={handleLogoutClick}>
              Log out
            </Link>}
            <Link to="/bookmarks" className="nav-items">{bookmarks.length === 0 ? "Bookmarks" : `Bookmarks (${bookmarks.length})`}</Link>
            {<LightModeIcon/>}
            <Link to="/"className="nav-home" onClick={() => setSelectedDate("")}>
              Home
            </Link>          
        </nav>
        )
}