import React from 'react'

const Quality = (props) => {
    const getBadgeClasses = (color) => {
        return "badge bg-" + color + " m-1"
    }

    return (
        <span key={props._id} className={getBadgeClasses(props.color)}>{props.name}</span>
    )
}

export default Quality