import { NavLink } from "react-router-dom"
import { useMediaQuery } from '@mountain-ui/react-hooks';

export default function CategoryDisplay () {
    const isMobile = useMediaQuery('screen and (min-width: 1px) and (max-width: 513px)');

    return (
        <>
        {!isMobile ? 
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
        : <select className="category-container">
                <NavLink className="category" to="events">
                    <option>Historical Events</option>
                </NavLink>
                <NavLink className="category" to="births">
                    <option>Birthdays</option>
                </NavLink>
                <NavLink className="category" to="deaths">
                    <option>Deaths</option>
                </NavLink>
                <NavLink className="category" to="holidays">
                    <option>Holidays</option>
                </NavLink>
                <NavLink className="category" to="selected">
                    <option>Other Events</option>
                </NavLink>
            </select>
        
        }
        </>
    )
}

