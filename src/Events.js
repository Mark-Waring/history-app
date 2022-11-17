import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "./AppContext";
import { useQuery } from "react-query";
import Event from "./Event";
import ReactPaginate from "react-paginate";

export default function Events() {
  const { selectedDate, displayedDate } = useContext(AppContext);
  const { category } = useParams();
  const [sortOrder, setSortOrder] = useState("DESC");
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const displayed = useRef();

  const { isLoading, error, data } = useQuery(
    ["eventData", selectedDate, category],
    () =>
      fetch(
        `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/${category}/${selectedDate}`
      ).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return <div>Something went wrong</div>;
      })
  );

  const filtered =
    data && data[category].filter((event) => event.pages[0].thumbnail);

  const handlePageClick = (event) => {
    const newOffset = data && (event.selected * 10) % filtered?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    if (displayed.current === data[category]) {
      return setCurrentItems(filtered.slice(itemOffset, itemOffset + 10));
    }
    displayed.current = data[category];
    setCurrentItems(filtered?.slice(0, 10));
    setPageCount(Math.ceil(filtered.length / 10));
    setViewAll(false);
    // eslint-disable-next-line
  }, [itemOffset, data]);

  useEffect(() => {
    if (!data) {
      return;
    }
    if (displayed.current !== data[category]) {
      return;
    }
    setCurrentItems(filtered?.slice(0, 10));
    setPageCount(Math.ceil(filtered?.length / 10));
    // eslint-disable-next-line
  }, [viewAll]);

  if (isLoading) {
    return <div>Loading...</div>;
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

  const itemsToMap = !viewAll ? currentItems : filtered;

  return (
    <>
      {
        <h2>
          {displayedCategories[category]} on {displayedDate}
        </h2>
      }
      {
        <div className="pagination-container">
          <div className="all-label">
            <input
              type="checkbox"
              id="view-all"
              name="view-all"
              value="{viewAll}"
              onChange={() => setViewAll(!viewAll)}
            />
            <label htmlFor="view-all">View All</label>
          </div>
          {category !== "holidays" && viewAll && (
            <div className="sort-wrapper">
              <label htmlFor={"sort-order"} className={"sort-tool"}>
                Sort by:{" "}
              </label>
              <select
                id="sort-order"
                className="sort-tool"
                name="sort-order"
                value={sortOrder}
                onChange={() => {
                  setSortOrder((curr) => (curr === "ASC" ? "DESC" : "ASC"));
                }}
              >
                <option value="DESC">Descending</option>
                <option value="ASC">Ascending</option>
              </select>
            </div>
          )}
          {!viewAll && (
            <ReactPaginate
              nextLabel="Next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={9}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              previousLabel="< Previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active-item"
              renderOnZeroPageCount={null}
            />
          )}
        </div>
      }

      <div className="events-container">
        {itemsToMap
          ?.sort((a, b) => {
            if (!viewAll || sortOrder === "DESC") return b?.year - a?.year;
            return a?.year - b?.year;
          })
          .map((event, idx) => {
            return (
              <Event
                key={idx}
                thumbnail={event.pages[0].thumbnail.source}
                page={event.pages[0].content_urls.desktop.page}
                description={event.text}
                year={event.year}
              />
            );
          })}
      </div>
    </>
  );
}
