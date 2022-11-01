import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function CategoryDisplay () {
    const params = useParams()
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
                {!params.category && <h2>Select a Category to View The Events</h2>}
            </>
        
    )
}

