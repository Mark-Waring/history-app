import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "./AppContext"

export default function DateSelector () {
  const { setChosenDate, chosenDate, setDisplayedDate } = useContext(AppContext)
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const monthNumber = parseInt(chosenDate.slice(0, 2));
  const dayNumber = parseInt(chosenDate.slice(3))
  let monthHas30Days = false;

  if (month === "04" || month === "06" || month === "09" || month === "11") {
    monthHas30Days = true
  } else monthHas30Days = false;
  
  const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  ];
  
  // const todayDate = new Date()
  // const todayMonth = todayDate.getMonth() + 1
  // const todayDay = todayDate.getDay() - 1
  // const todayString = `${todayMonth}/${todayDay}`

  function handleMonthChange (e) {
      setMonth(e.target.value)
  }

  useEffect(() => {
    if ((month === "02" & parseInt(day) >= 30) || (monthHas30Days && parseInt(day) > 30)) {
      setDay("")
    }
  }, [month, day, monthHas30Days])

  function handleDayChange (e) {
      setDay(e.target.value)
      
  }

  function handleDateSelection () {
    setChosenDate(`${month}/${day}`)
  }

  // function handleTodayClick () {
  //   setChosenDate(todayString)
  // }

  useEffect (() => {
    setDisplayedDate(`${monthNames[(monthNumber) - 1]} ${dayNumber}`)
  })
  
  return (
    <>
      <h2>Select a Date</h2>
      <div className="date-selection">
        <div className="date-container">
          {/* <Link to="/">
            <button className="date-button" disabled={chosenDate === todayString} onClick={handleTodayClick}>Today</button>
          </Link> */}
          <select  id="month" name="month" onChange={handleMonthChange} >
            <option>month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select  id="day" name="day" onChange={handleDayChange}>
            <option>day</option>
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
            {month !== "02" && <option value="30">30</option>}
            {month !== "02" && month !== "04" && month !== "06" && month !== "09" && month !== "11" && <option value="31">31</option>}
          </select>                      
        </div>
          <Link to="/">
            <button  className="date-button" disabled={month.length !== 2 || day.length !== 2} onClick={handleDateSelection}>Go</button>
          </Link>                
      </div>
    </>
    )
  }