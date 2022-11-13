import { useContext } from "react";
import { AppContext } from "./AppContext";
import lightIcon from "./icons/moon-6686.png";
import darkIcon from "./icons/sun-xxl.png";

export default function LightModeIcon() {
  const { setIsDarkTheme, isDarkTheme } = useContext(AppContext);
  return (
    <img
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      src={!isDarkTheme ? lightIcon : darkIcon}
      alt="theme-icon"
      className="light-dark-icon nav-items"
    />
  );
}
