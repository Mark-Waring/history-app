import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useEffect } from "react"
import LightModeIcon from "./LightModeIcon"

export default function NavBar () {
    const app = useContext(AppContext);

    function handleLogoutClick() {
        app.setIsLoggedIn(false)
        app.setBookmarks([])
    }

    function handleThemeClick () {
        app.setIsDarkTheme(!app.isDarkTheme);
    }

    useEffect(() => {
        if (app.isDarkTheme) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [app.isDarkTheme]);

    return <nav className="nav-bar">
            <Link to="/">
            {app.isLoggedIn && <div onClick={handleLogoutClick}className="nav-items">Log out</div>}
            </Link>
            <Link to="/bookmarks">
            {app.bookmarks.length > 0 && <div className="nav-items">Bookmarks ({app.bookmarks.length})</div>}
            {app.bookmarks.length === 0 && <div className="nav-items">Bookmarks</div>}
            </Link>
            {!app.isDarkTheme && <LightModeIcon onThemeClick={handleThemeClick} src="https://static.thenounproject.com/png/2853779-200.png" />}
            {app.isDarkTheme && <LightModeIcon onThemeClick={handleThemeClick} src="https://cdn3.iconfinder.com/data/icons/ink-basic/35/dark-mode-512.png" />}
            <Link to="/" onClick={() => app.setChosenDate(null)}>
            <div>Home</div>
            </Link>          
        </nav>
}
