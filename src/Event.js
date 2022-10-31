import App from "./App"
import { AppContext } from "./AppContext"
import { useContext } from "react"

export default function Event (props) {
  const app = useContext(AppContext)

  

  return (
    ( <div className="event">
      <br/>
        <a href={props.page} target="blank" className="image-link">
          <img className ="event-image" src={props.thumbnail} alt={props.description} key={props.key}/>
        </a>
        <div className="event-caption" key={props.key}>
            <h3 className="event-year"></h3>
            <p>{props.description}</p>
            <a href={props.page} target="blank" key={props.key}>Learn More</a>
        </div>
        <br />
        <button onClick={() => app.onBookmarkAdd(props)}>Bookmark</button>
      </div>
   )
  )
}
