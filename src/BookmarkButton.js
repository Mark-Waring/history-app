
export default function BookmarkButton (props) {
    return <button onClick={props.onBookmarkClick}>{props.children}</button>
}