import React from 'react'
import Quality from './quality'
import Bookmark from './bookmark'

const User = (props) => {
    return (
        <tr key={props.user._id}>
            <td>{props.user.name}</td>
            <td>
                {props.user.qualities.map(quality => (
                    <Quality
                        {...quality}/>
                    ))
                }
            </td>
            <td>{props.user.profession.name}</td>
            <td>{props.user.completedMeetings}</td>
            <td>{props.user.rate}/5</td>
            <td>
                <Bookmark
                        id = {props.user._id}
                        isBookmarked = {props.user.bookmark}
                        onToggle = {props.onToggle}/>
            </td>
            <td><button className="btn btn-danger m-2" onClick={() => props.onDelete(props.user._id)}>Удалить</button></td>
        </tr>
    )
}

export default User