import { useContext } from "react"
import { AppContext } from "./AppContext"
import { Link } from "react-router-dom"


export default function BookmarkLink () {
    const {bookmarks} = useContext(AppContext)
    return <Link to="/bookmarks" className="nav-items" children={bookmarks.length === 0 ? "Bookmarks" : `Bookmarks (${bookmarks.length})`}></Link>
}