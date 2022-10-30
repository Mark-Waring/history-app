import { useParams } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import Event from "./Event";
import { useQuery } from "react-query";



export default function EventsDisplay (props) {
    const app = useContext(AppContext)
    let params = useParams()
    const eventType = params.type

    const { isLoading, error, data } = useQuery(["eventData"], () =>
      fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${app.month}/${app.day}`).then(
        (res) => res.json()
      )
    );

    if (isLoading) {
        return <h3>Loading....</h3>
    }

    if (error) {
        return <h3>An error has occurred. Please try again later.</h3>
    }

    if (eventType === "selected") {
        return data.selected.map(event => {
            return <p>{event.text}</p>
        })
    } 
    
    if (eventType === "births") {
        return data.births.map(event => {
            return <p>{event.text}</p>
        })
    } 

    if (eventType === "deaths") {
        return data.deaths.map(event => {
            return <p>{event.text}</p>
        })
    } 

    if (eventType === "holidays") {
        return data.holidays.map(event => {
            return <p>{event.text}</p>
        })
    } 

    if (eventType === "events") {
        return data.events.map(event => {
            return <p>{event.text}</p>
        })
    } 
}
 


