import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useEffect } from "react"
import LightModeIcon from "./LightModeIcon"

export default function NavBar () {
    const { isDarkTheme, setIsDarkTheme, isLoggedIn, setIsLoggedIn, setBookmarks, bookmarks, setChosenDate  } = useContext(AppContext);

    function handleLogoutClick() {
        setIsLoggedIn(false)
        setBookmarks([])
        setChosenDate("");
    }

    useEffect(() => {
        if (isDarkTheme) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [isDarkTheme]);

    return <nav className="nav-bar">
            <Link to="/">
              {isLoggedIn && <div onClick={handleLogoutClick}className="nav-items">Log out</div>}
            </Link>
            <Link to="/bookmarks">
              {bookmarks.length > 0 && <div className="nav-items">Bookmarks ({bookmarks.length})</div>}
              {bookmarks.length === 0 && <div className="nav-items">Bookmarks</div>}
            </Link>
              {!isDarkTheme && <LightModeIcon src="https://static.thenounproject.com/png/2853779-200.png" />}
              {isDarkTheme && <LightModeIcon src="https://cdn3.iconfinder.com/data/icons/ink-basic/35/dark-mode-512.png" />}
            <Link to="/" onClick={() => setChosenDate("")}>
              <div>Home</div>
            </Link>          
        </nav>
}
