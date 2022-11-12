import { Link } from "react-router-dom"

export default function CategoryDisplay () {
    
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
            </>
        
    )
}

