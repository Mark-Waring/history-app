import { useContext } from "react"
import { AppContext } from "./AppContext"
import Event from "./Event"


export default function Bookmarks () {
    const app = useContext(AppContext)
        return (
        <>
        <div class="events-container">
                {app.bookmarks.map(event => {
                return event.thumbnail && (
                        <Event
                            key={event.key}
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