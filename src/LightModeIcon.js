import { useContext } from "react"
import { AppContext } from "./AppContext"


const lightIcon = "https://cdn3.iconfinder.com/data/icons/ink-basic/35/dark-mode-512.png"
const darkIcon = "https://static.thenounproject.com/png/2853779-200.png"

export default function LightModeIcon() {
    const { setIsDarkTheme, isDarkTheme } = useContext(AppContext)
    return <img onClick={() => setIsDarkTheme(!isDarkTheme)} src={!isDarkTheme ? lightIcon : darkIcon} alt="theme-icon" className="light-dark-icon nav-items"/>
}
