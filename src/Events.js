import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useQuery } from "react-query";
import Event from "./Event";

export default function Events() {
  const { chosenDate } = useContext(AppContext);
  const category = useParams().category;
  const monthNumber = parseInt(chosenDate.slice(0, 2), 10);
  const dayNumber = parseInt(chosenDate.slice(3), 10);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { isLoading, error, data } = useQuery(["eventData", chosenDate], () =>
    fetch(
      `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${chosenDate}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw "Something went wrong";
    })
  );

  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {
        <h2>
          Here's What Happened On {monthNames[monthNumber - 1]} {dayNumber}
        </h2>
      }
      <div className="events-container">
        {data[category].map((event, idx) => {
          return (
            event.pages[0].thumbnail && (
              <Event
                key={idx}
                id={idx}
                thumbnail={event.pages[0].thumbnail.source}
                page={event.pages[0].content_urls.desktop.page}
                description={event.text}
                year={event.year}
              />
            )
          );
        })}
      </div>
    </>
  );
}