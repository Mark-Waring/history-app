

export default function LightModeIcon(props) {
    return <img onClick={props.onThemeClick} src={props.src} alt="light-mode-icon" className="light-dark-icon nav-items"/>
}
