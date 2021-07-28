import axios from 'axios';
import React from 'react';
import styles from './Members.module.css';
import noPhoto from '../../assets/images/user.svg'

const Members = (props) => {

    if (props.members.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => 
            {
                 debugger 
                props.setMembers(response.data.items)
            });

    }
  
    return <div> {props.members.map(m => <div className={styles.members} key={m.id}>
        <span>
            <div className={styles.member}><img src={m.photos.large ? m.photos.large : noPhoto } alt={m.name}/></div>
        <div>
            <button id={m.id} onClick={() => props.followMember(m.id)} >
            {m.followed ? 'Unfollow' : 'Follow'}
            </button>
            </div>
        </span>
        <span><div>{m.name}</div>
        <div>Studying</div></span>

        <span><div>Минск</div><div>Беларусь</div></span>
        </div>)} </div> 
}

export default Members;