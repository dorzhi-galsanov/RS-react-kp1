import React, {useState} from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api/index'
// import api from './api/api'

function App () {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleRemoveUser = (id) => {
        setUsers(prevState => prevState.filter(user => user._id !== id))
    }
    const handleToggleBookmark = (id) => {
        setUsers(prevState => prevState.map(user => {
            if (user._id === id) {
                return {...user, bookmark: !user.bookmark} 
            }
            return user
        }))
    }

    return (
        <>
            {SearchStatus(users)}
            <Users
                users = {users}
                onDelete = {handleRemoveUser}
                onToggle = {handleToggleBookmark}/>
        </>
    )
}
export default App