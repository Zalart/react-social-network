import User from "./User/User";


const Users = (props) => {

    return props.users.map(user => <User name={user.name} id={user.id} photo={user.photo}/> )

}

export default Users;