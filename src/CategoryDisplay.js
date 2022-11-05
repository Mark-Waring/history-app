import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"

export default function CategoryDisplay () {
    const { category } = useParams()
    const { displayedDate } = useContext(AppContext)
    return (
        <>
        <div className="category-container">
            <span className="category">
                <Link to="events">
                    Historical Events
                </Link>
            </span>
            <span className="category">
                <Link to="births">
                    Birthdays
                </Link>
                </span>
            <span className="category">
                <Link to="deaths">
                    Deaths
                </Link>
                </span>
            <span className="category">
                <Link to="holidays">
                    Holidays
                </Link>
                </span>
            <span className="category">
                <Link to="selected">
                    Other Events
                </Link>
                </span>
                </div>
                {!category && <h2>Select a Category to View Events for {displayedDate}</h2>}
            </>
        
    )
}

