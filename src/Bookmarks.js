import { useContext } from "react"
import { AppContext } from "./AppContext"
import Event from "./Event"


export default function Bookmarks () {
    const app = useContext(AppContext)
        return (
        <>
        {!app.isLoggedIn && <h2>You must be logged in to view this content</h2>}
        {app.isLoggedIn && app.bookmarks.length === 0 && 
            <h2>You have no bookmarked events right now</h2>
        }
        {app.isLoggedIn &&
        <div className="events-container">
                {app.bookmarks.map((event, idx) => {
                return event.thumbnail && (
                        <Event
                            key={idx}
                            id={idx}
                            thumbnail={event.thumbnail}
                            page={event.page}
                            description={event.description}
                            year={event.year}
                        />
                    )
                })}
            </div>}
            </>
            )
    }