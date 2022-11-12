import { Link } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "./AppContext";

export default function DateSelector() {
  const { setSelectedDate, selectedDate, setDisplayedDate } =
    useContext(AppContext);
  const [month, setMonth] = useState("01");
  const [day, setDay] = useState("01");
  const dayNumber = parseInt(day);
  
  const months = [
    { val: "01", display: "January", maxDay: 31 },
    { val: "02", display: "February", maxDay: 29 },
    { val: "03", display: "March", maxDay: 31 },
    { val: "04", display: "April", maxDay: 30 },
    { val: "05", display: "May", maxDay: 31 },
    { val: "06", display: "June", maxDay: 30 },
    { val: "07", display: "July", maxDay: 31 },
    { val: "08", display: "August", maxDay: 31 },
    { val: "09", display: "September", maxDay: 30 },
    { val: "10", display: "October", maxDay: 31 },
    { val: "11", display: "November", maxDay: 30 },
    { val: "12", display: "December", maxDay: 31 },
  ];

  const dayLoop = (loop) => {
    return loop();
  };

  const maxDay = useMemo(() => {
    let monthKeys = months.find((v) => v.val === month);
    return monthKeys?.maxDay;
   // eslint-disable-next-line
  }, [month]);

  console.log(month)
  console.log(maxDay)


  useEffect(() => {
    if (day > maxDay) {
      setDay(maxDay);
    } // eslint-disable-next-line
  }, [maxDay]);

  function handleTodayClick() {
    const today = new Date();
    const todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1;
    if (todayMonth < 10) {
    todayMonth = "0" + todayMonth;
  }
    setMonth(todayMonth.toString());
    setDay(todayDay);
    setSelectedDate(`${todayMonth}/${todayDay}`);
  }

  useEffect(() => {
    setDisplayedDate(`${months[month - 1].display} ${dayNumber}`);
    // eslint-disable-next-line
  }, [selectedDate]);

  return (
    <>
      <h2>Select a Date</h2>
      <div className="date-selection">
        <div className="date-container">
          <Link to="/events">
            <button
              className="date-button"
              onClick={handleTodayClick}
            >
              Today
            </button>
          </Link>
          <select
            id="month"
            name="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            {months.map((val) => (
              <option key={val.val} value={val.val}>
                {val.display}
              </option>
            ))}
          </select>
          <select
            id="day"
            value={day}
            name="day"
            onChange={(e) => setDay(e.target.value)}
          >
            {
              dayLoop(() => {
                const dayOptions = [];
                for (let i = 1; i < 30; i++) {
                  dayOptions.push(<option key={i}>{i < 10 ? "0" + i : i}</option>);
                }
                return dayOptions;
              })
            }
            {maxDay >= 30 && <option value="30">30</option>}
            {maxDay === 31 && <option value="31">31</option>}
          </select>
        </div>
        <Link to="/events">
          <button
            className="date-button"
            onClick={() => setSelectedDate(`${month}/${day}`)}
          >
            Go
          </button>
        </Link>
      </div>
    </>
  );
}