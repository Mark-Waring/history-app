import { useParams } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useQuery } from "react-query";
import Event from "./Event";



export default function Events () {
    const app = useContext(AppContext)
    const category = useParams().category
    const monthNumber = parseInt(app.chosenDate.slice(0, 2), 10)
    const dayNumber = parseInt(app.chosenDate.slice(3), 10)
    const monthNames = ["January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October", "November", "December"]
    
    const { isLoading, error, data } = useQuery(["eventData"], () =>
      fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${app.chosenDate}`).then(
        (res) => res.json()
      )
    );

    if (isLoading) {
        return <h3>Loading....</h3>
    }
    
    if (error) {
        return <h3>An error has occurred. Please try again later.</h3>
    }  
    
    console.log(data)
    return ( 
        <>
        {<h2>Here's What Happened On {monthNames[monthNumber - 1]} {dayNumber}</h2>}
        <div className="events-container">
            {
            data[category].map((event, idx) => {
            return event.pages[0].thumbnail && (
                    <Event
                        key={idx}
                        id={idx}
                        thumbnail={event.pages[0].thumbnail.source}
                        page={event.pages[0].content_urls.desktop.page}
                        description={event.text}
                        year={event.year}
                    /> 
                )
            })}
        </div>
        </>
        )
    }  

    


    
    
 


