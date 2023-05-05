import React, {useState} from 'react'
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const getTitle = () => {
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

    const getBadgeClasses = (color) => {
        return "badge bg-" + color + " m-1"
    }

    const getAllQualities = (mas) => {
        return mas.map((quality) => (
            <span key={quality._id} className={getBadgeClasses(quality.color)}>{quality.name}</span>
        ))
    }

    const handleRemoveUser = (id) => {
        setUsers(prevState => prevState.filter(user => user._id !== id))
    }

    const renderRows = () => {
        return users.length !== 0 ? users.map(user => (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{getAllQualities(user.qualities)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td><button className="btn btn-danger m-2" onClick={() => handleRemoveUser(user._id)}>Удалить</button></td>
            </tr>
        )) : ""
    }

    const renderTable = () => {
        if (users.length > 0) {
            return (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>{renderRows()}
                    </tbody>
                </table>
            )
        } else {
            return ''
        }
    }

    return (
        <>
            {getTitle()}
            {renderTable()}
        </>
    )
}

export default Users