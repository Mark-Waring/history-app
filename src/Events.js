import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { useQuery } from "react-query";
import Event from "./Event";

export default function Events() {
  const { selectedDate, displayedDate } = useContext(AppContext);
  const { category } = useParams();
  const [sortOrder, setSortOrder] = useState("DESC");

  const { isLoading, error, data } = useQuery(["eventData", selectedDate], () =>
    fetch(
      `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${selectedDate}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return <div>Something went wrong</div>;
    })
  );

  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  const displayedCategories = {
    events: "Historical Events",
    births: "Birthdays",
    deaths: "Deaths",
    holidays: "Holidays",
    selected: "Other Events",
  };

  return (
    <>
      {
        <h2>
          {displayedCategories[category]} on {displayedDate}
          <button
            onClick={() => {
              setSortOrder((curr) => (curr === "ASC" ? "DESC" : "ASC"));
            }}
          >
            {sortOrder}
          </button>
        </h2>
      }
      <div className="events-container">
        {data[category]
          .sort((a, b) => {
            if (sortOrder === "ASC") return a.year - b.year;

            return b.year - a.year;
          })
          .map((event, idx) => {
            return (
              event.pages[0].thumbnail && (
                <Event
                  key={idx}
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