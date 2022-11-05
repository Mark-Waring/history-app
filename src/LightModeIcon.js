import { useContext } from "react"
import { AppContext } from "./AppContext"



export default function LightModeIcon({src}) {
    const { setIsDarkTheme, isDarkTheme } = useContext(AppContext)
    return <img onClick={() => setIsDarkTheme(!isDarkTheme)} src={src} alt="theme-icon" className="light-dark-icon nav-items"/>
}
