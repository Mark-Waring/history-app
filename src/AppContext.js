import {useState, createContext} from "react";

export const AppContext = createContext();

export function AppProvider(props) {
    const [month, setMonth] = useState("0");
    const [day, setDay] = useState("0");
    const [chosenDate, setChosenDate] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [bookmarks, setBookmarks] = useState([]);
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    
    function handleBookmarkAdd(newBookmark) {
          setBookmarks([
            ...bookmarks,
            {...newBookmark,},
          ]);
        }

    const value = {
        month,
        setMonth,
        day,
        setDay,
        isLoggedIn,
        setIsLoggedIn,
        chosenDate,
        setChosenDate,
        isBookmarked,
        setIsBookmarked,
        bookmarks,
        setBookmarks,
        onBookmarkAdd: handleBookmarkAdd,
        isDarkTheme,
        setIsDarkTheme
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};