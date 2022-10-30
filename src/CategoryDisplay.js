import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function CategoryDisplay () {
    return (
        <>
        <span className="category">
            <Link to="selected">
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
            <Link to="events">
                Other Events
            </Link>
            </span>
        <Outlet />
        </>
    )
}