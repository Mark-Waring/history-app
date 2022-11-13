import { AppContext } from "./AppContext"
import { useContext } from "react"
import BookmarkButton from "./BookmarkButton"

export default function Event ({thumbnail, description, page, year}) {
  const { onBookmarkAdd, onBookmarkRemove, bookmarks } = useContext(AppContext)
  return (
    <div className="event">
      <div className="event-border">
        <a href={page} target="blank" className="image-link">
          <img className ="event-image"
            src={thumbnail}
            alt={description}
            />
        </a>
        <div className="event-caption">
          <h3 className="event-year">{year}</h3>
          <p 
            className="event-description"
            style={{marginTop: year ? "10px" : "0px"}}
            >{description}
          </p>
          <a href={page} target="blank">Learn More</a>
        </div>
        {!bookmarks.some(bookmark => description === bookmark.description) ?
        <BookmarkButton onBookmarkClick={() => onBookmarkAdd({thumbnail, description, page, year})} children="Bookmark"/>
        :  <BookmarkButton onBookmarkClick={() => onBookmarkRemove({thumbnail, description, page, year})} children="Remove Bookmark"/>}
      </div>
    </div>
   )
}
