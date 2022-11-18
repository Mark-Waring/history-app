import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
  const [selectedDate, setSelectedDate] = useState("01/01");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarks, setBookmarks] = useState(
    () => JSON.parse(localStorage.getItem("bookmarks")) ?? []
  );
  const [isDarkTheme, setIsDarkTheme] = useState(() =>
    JSON.parse(localStorage.getItem("is_dark_theme") === "true")
  );
  const [displayedDate, setDisplayedDate] = useState(null);

  useEffect(() => {
    localStorage.setItem("is_dark_theme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  function handleBookmarkAdd(newBookmark) {
    setBookmarks([...bookmarks, { ...newBookmark }]);
  }

  function handleBookmarkRemove({ description }) {
    const updatedBookmarks = bookmarks.filter((bookmark) => {
      return description !== bookmark.description;
    });
    setBookmarks(updatedBookmarks);
  }

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    selectedDate,
    setSelectedDate,
    isBookmarked,
    setIsBookmarked,
    bookmarks,
    setBookmarks,
    onBookmarkAdd: handleBookmarkAdd,
    onBookmarkRemove: handleBookmarkRemove,
    isDarkTheme,
    setIsDarkTheme,
    displayedDate,
    setDisplayedDate,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
