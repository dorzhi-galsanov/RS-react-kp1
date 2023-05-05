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
            text = `${length} человека тусанет с тобой сегодня`
        } else {
            text = `${length} человек тусанет с тобой сегодня`
        }
        return (
            <span className={className}>{text}</span>
        )
    }

    const getBadgeClasses = (color) => {
        return "badge bg-" + color + " m-1"
    }

    const getAllQualities = (mas) => {
        let str = mas.reduce((str, quality) => {
            return <>{str}<span className={getBadgeClasses(quality.color)}>{quality.name}</span></>
        }, '')
        return str
    }

    const handleRemoveUser = (id) => {
        setUsers(prevState => prevState.filter(user => user._id !== id))
    }

    const renderRows = () => {
        return users.length !== 0 ? users.map(user => (
            <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <th scope="row">{getAllQualities(user.qualities)}</th>
                <th scope="row">{user.profession.name}</th>
                <th scope="row">{user.completedMeetings}</th>
                <th scope="row">{user.rate}/5</th>
                <th scope="row"><button className="btn btn-danger m-2" onClick={() => handleRemoveUser(user._id)}>Удалить</button></th>
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