import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useEffect } from "react";

export default function NavBar () {
    const app = useContext(AppContext);

    function handleLogoutClick() {
        app.setIsLoggedIn(false)
        app.setBookmarks([])
    }

    useEffect(() => {
        if (app.isDarkTheme) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [app.isDarkTheme]);
    
      function handleThemeClick() {
        app.setIsDarkTheme(!app.isDarkTheme);
      }

    return <nav className="nav-bar">
            <Link to="/">
            {app.isLoggedIn && <div onClick={handleLogoutClick}className="nav-items">Log out</div>}
            </Link>
            <Link to="/bookmarks">
            {app.bookmarks.length > 0 && <div className="nav-items">Bookmarks ({app.bookmarks.length})</div>}
            {app.bookmarks.length === 0 && <div className="nav-items">Bookmarks</div>}
            </Link>
            <img onClick={handleThemeClick}src="https://static.thenounproject.com/png/2853779-200.png"alt="light-mode" className="light-dark-icon nav-items"/>
            <Link to="/">
            <div>Home</div>
            </Link>          
        </nav>
}