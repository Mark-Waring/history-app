import { AppContext } from "./AppContext"
import { useContext } from "react"
import { useParams } from "react-router-dom"

export default function Event ({thumbnail, description, page, year}) {
  let params = useParams()
  const app = useContext(AppContext)

  

  return (
    ( <div className="event">
      <br/>
        <a href={page} target="blank" className="image-link">
          <img className ="event-image" src={thumbnail} alt={description}/>
        </a>
        <div className="event-caption">
            <h3 className="event-year">{year}</h3>
            <p>{description}</p>
            <a href={page} target="blank">Learn More</a>
        </div>
        <br />
        {params.category && <button onClick={() => app.onBookmarkAdd({thumbnail, description, page, year})}>Bookmark</button>}
      </div>
   )
  )
}
