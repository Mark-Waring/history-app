import { Link } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "./AppContext";

export default function DateSelector() {
  const { setSelectedDate, selectedDate, setDisplayedDate } =
    useContext(AppContext);
  const [month, setMonth] = useState("01");
  const [day, setDay] = useState("01");
  const dayNumber = parseInt(day);

  const today = new Date();
  let todayMonth = today.getMonth() + 1;
  if (todayMonth < 10) {
    todayMonth = "0" + todayMonth;
  }
  const todayDay = today.getDate();

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

  const maxDay = useMemo(() => {
    let monthKeys = months.find((v) => v.val === month);
    return monthKeys?.maxDay;
   // eslint-disable-next-line
  }, [month]);


  useEffect(() => {
    if (day > maxDay) {
      setDay(maxDay);
    } // eslint-disable-next-line
  }, [maxDay]);

  function handleTodayClick() {
    setMonth(todayMonth);
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
              disabled={selectedDate === `${todayMonth}/${todayDay}`}
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
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
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