import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useState } from "react"


export default function DateSelector () {
    const { setChosenDate} = useContext(AppContext)
    const [month, setMonth] = useState(null);
    const [day, setDay] = useState(null);
    
    
    const todayDate = new Date()
    let todayMonth = todayDate.getMonth() + 1
    let todayDay = todayDate.getDay() - 1
  
    function handleMonthChange (e) {
        setMonth(e.target.value)
    } 

    function handleDayChange (e) {
        setDay(e.target.value)

      }

    function handleDateSelection () {
        setChosenDate(`${month}/${day}`)
        
      }

 function handleTodayClick () {
   setChosenDate(`${todayMonth}/${todayDay}`)
 }
    
    
      
      return (
        <>
        <h2>Select a Date</h2>
              <div className="date-selection">
                  <div className="date-container">
                    <Link to="/">
                      <button className="date-button" onClick={handleTodayClick}>Today</button>
                    </Link>
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
                        <button  className="date-button" disabled={!month || !day} onClick={handleDateSelection}>Go</button>
                    </Link>                
              </div>
              </>
      )
    }