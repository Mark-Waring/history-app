import { useParams } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useQuery } from "react-query";
import Event from "./Event";



export default function EventsDisplay (props) {
    const app = useContext(AppContext)
    let params = useParams()
    const eventType = params.category
    

    const { isLoading, error, data } = useQuery(["eventData"], () =>
      fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${app.chosenDate}`).then(
        (res) => res.json()
      )
    );
// 
    if (isLoading) {
        return <h3>Loading....</h3>
    }
// 
    if (error) {
        return <h3>An error has occurred. Please try again later.</h3>
    }
    
    const {selected, births, deaths, holidays, events} = data

    let category;

    switch (eventType) {
        case "selected":
          category = selected;
          break;
        case "births":
          category = births;
          break;
          case "deaths": 
          category = deaths;
          break;
          case "holidays": 
          category = holidays;
          break;
          case "events": 
          category = events;
      }
        
        return (
            <>
            <h2>Here's What Happened On {app.chosenDate}</h2>
            <div className="events-container">
                {category.map((event, idx) => {
                return event.pages[0].thumbnail && (
                        <Event
                            key={idx}
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
    
 


