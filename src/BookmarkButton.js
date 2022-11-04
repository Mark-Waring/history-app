
export default function BookmarkButton ({onBookmarkClick, children}) {
    return <button onClick={onBookmarkClick}>{children}</button>
}