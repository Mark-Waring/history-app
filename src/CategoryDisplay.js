import { NavLink } from "react-router-dom"

export default function CategoryDisplay () {

    return (
        <div className="category-container">
            <NavLink className="category" to="events">
                Historical Events
            </NavLink>
            <NavLink className="category" to="births">
                Birthdays
            </NavLink>
            <NavLink className="category" to="deaths">
                Deaths
            </NavLink>
            <NavLink className="category" to="holidays">
                Holidays
            </NavLink>
            <NavLink className="category" to="selected">
                Other Events
            </NavLink>
        </div>
    )
}

