import { NavLink } from "react-router-dom"

export default function CategoryDisplay () {
    
    return (
        <div className="category-container">
            <NavLink activeClassName="active" className="category" to="events">
                Historical Events
            </NavLink>
            <NavLink activeClassName="active" className="category" to="births">
                Birthdays
            </NavLink>
            <NavLink activeClassName="active" className="category" to="deaths">
                Deaths
            </NavLink>
            <NavLink activeClassName="active" className="category" to="holidays">
                Holidays
            </NavLink>
            <NavLink activeClassName="active" className="category" to="selected">
                Other Events
            </NavLink>
        </div>
    )
}

