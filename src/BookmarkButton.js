
export default function BookmarkButton ({onBookmarkClick, children}) {
    return (
        <button
            className="bookmark-button"
            onClick={onBookmarkClick}
        >
            {children}
        </button>
    )
}