import React from 'react'

const Bookmark = (props) => {
    const getClassName = (isBookmarked) => {
        return isBookmarked ? "bi bi-bookmark-check" : "bi bi-bookmark"
    }

    return (
        <button className="btn btn-primary m-2" onClick={() => props.onToggle(props.id)}>
            <i className={getClassName(props.isBookmarked)}></i>
        </button>
    )
}

export default Bookmark