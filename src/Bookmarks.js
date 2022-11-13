import { useContext } from "react";
import { AppContext } from "./AppContext";
import Event from "./Event";

export default function Bookmarks() {
  const { bookmarks, isLoggedIn } = useContext(AppContext);
  return (
    <>
      {!isLoggedIn && <h2>You must be logged in to view this content</h2>}
      {isLoggedIn && bookmarks.length === 0 && (
        <h2>You have no bookmarked events right now</h2>
      )}
      {isLoggedIn && bookmarks.length > 0 && <h2>Bookmarked Events</h2>}
      {isLoggedIn && (
        <div className="events-container">
          {bookmarks.map((event, idx) => {
            return (
              event.thumbnail && (
                <Event
                  key={idx}
                  thumbnail={event.thumbnail}
                  page={event.page}
                  description={event.description}
                  year={event.year}
                />
              )
            );
          })}
        </div>
      )}
    </>
  );
}
