import { NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function CategoryDisplay() {
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });
  let navigate = useNavigate();

  return (
    <div className="category-container">
      {!isMobile ? (
        <>
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
        </>
      ) : (
        <select
          onChange={(e) => navigate(e.target.value)}
          id="categories-dropdown"
        >
          <option value="events">Historical Events</option>
          <option value="births">Birthdays</option>
          <option value="deaths">Deaths</option>
          <option value="holidays">Holidays</option>
          <option value="selected">Other Events</option>
        </select>
      )}
    </div>
  );
}
