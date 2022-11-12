import { AppContext } from "./AppContext"
import { useContext } from "react"

export default function Event ({thumbnail, description, page, year}) {
  const { onBookmarkAdd, onBookmarkRemove, bookmarks } = useContext(AppContext)
  return (
    ( <div className="event">
        <a href={page} target="blank" className="image-link">
          <img className ="event-image" src={thumbnail} alt={description}/>
        </a>
        <div className="event-caption">
            <h3 className="event-year">{year}</h3>
            <p className="event-description">{description}</p>
            <a href={page} target="blank">Learn More</a>
        </div>
        <br />
        {!bookmarks.some(bookmark => description === bookmark.description) ?
         <button onClick={() => onBookmarkAdd({thumbnail, description, page, year})}>Bookmark</button> :
         <button onClick={() => onBookmarkRemove({thumbnail, description, page, year})}>Remove Bookmark</button>}
      </div>
   )
  )
}
