import User from "./User/User";


const Users = (props) => {

    return props.users.map(user => <User name={user.name} key={user.name + user.id} id={user.id} photo={user.photo}/> )

}

export default Users;