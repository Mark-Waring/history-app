import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export default function CategoryDisplay() {
  const [mobileCat, setMobileCat] = useState("events");
  const { category } = useParams();
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });
  let navigate = useNavigate();

  const categories = [
    { val: "events", display: "Historical Events" },
    { val: "births", display: "Birthdays" },
    { val: "deaths", display: "Deaths" },
    { val: "holidays", display: "Holidays" },
    { val: "selected", display: "Other Events" },
  ];

  useEffect(() => {
    setMobileCat(category);
  }, [category]);

  return (
    <div className="category-container">
      {!isMobile ? (
        <>
          {categories.map((val) => (
            <NavLink className="category" to="val.val">
              {val.display}
            </NavLink>
          ))}
        </>
      ) : (
        <select
          id="category"
          name="category"
          style={{ width: "40%", textAlign: "center" }}
          value={mobileCat}
          onChange={(e) => {
            setMobileCat(e.target.value);
            navigate(e.target.value);
          }}
        >
          {categories.map((val) => (
            <option key={val.val} value={val.val}>
              {val.display}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
