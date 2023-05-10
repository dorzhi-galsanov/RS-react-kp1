import React from 'react'
import User from './user'

const Users = (props) => {
    if (props.users.length > 0) {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
                        <User
                            user = {user}
                            onDelete = {props.onDelete}
                            onToggle = {props.onToggle}/>
                    ))}
                </tbody>
            </table>
        )
    } else {
        return ''
    }
}

export default Users