

export default function LightModeIcon({onThemeClick, src}) {
    return <img onClick={onThemeClick} src={src} alt="theme-icon" className="light-dark-icon nav-items"/>
}
