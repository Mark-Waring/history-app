import { useContext } from "react"
import { AppContext } from "./AppContext"
import Event from "./Event"


export default function Bookmarks () {
    const app = useContext(AppContext)
        return (
        <>
        <h2>Bookmarked Events</h2>
        <div className="events-container">
                {app.bookmarks.map((event, idx) => {
                return event.thumbnail && (
                        <Event
                            key={idx}
                            thumbnail={event.thumbnail}
                            page={event.page}
                            description={event.description}
                            year={event.year}
                        />
                    )
                })}
            </div>
            </>
            )
    }