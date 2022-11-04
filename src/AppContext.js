import {useState, createContext} from "react";

export const AppContext = createContext();

export function AppProvider(props) {
    
    const [chosenDate, setChosenDate] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [bookmarks, setBookmarks] = useState([]);
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [monthName, setMonthName] = useState("")
    
    function handleBookmarkAdd(newBookmark) {
          setBookmarks([
            ...bookmarks,
            {...newBookmark},
          ]);
        }

     
    function handleBookmarkRemove({description}) {
        const updatedBookmarks = bookmarks.filter((bookmark) => {
          console.log(bookmark)
          return description !== bookmark.description
        });
        setBookmarks(updatedBookmarks);
      }

    const value = {
        isLoggedIn,
        setIsLoggedIn,
        chosenDate,
        setChosenDate,
        isBookmarked,
        setIsBookmarked,
        bookmarks,
        setBookmarks,
        onBookmarkAdd: handleBookmarkAdd,
        onBookmarkRemove: handleBookmarkRemove,
        isDarkTheme,
        setIsDarkTheme,
        monthName,
        setMonthName
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};