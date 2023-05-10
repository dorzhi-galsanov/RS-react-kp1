import React from 'react'

const SearchStatus = (users) => {
    const length = users.length
    let className = 'badge bg-primary m-2'
    let text = ''
    if (length === 0) {
        className = 'badge bg-danger m-2'
        text = 'Никто с тобой не тусанет'
    } else if (length % 100 !== 11 && length % 100 !== 12 && length % 100 !== 13 && length % 100 !== 14 && (length % 10 === 2 || length % 10 === 3 || length % 10 === 4)) {
        text = `${length} человека тусанут с тобой сегодня`
    } else if (length === 1) {
        text = `${length} человек тусанет с тобой сегодня`
    } else {
        text = `${length} человек тусанут с тобой сегодня`
    }

    return (
        <h2><span className={className}>{text}</span></h2>
    )
}

export default SearchStatus