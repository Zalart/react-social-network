import React from 'react';
import styles from './Members.module.css';
import noPhoto from '../../assets/images/user.svg'
import Preloader from '../common/Preloader/Preloader';

const Members = (props) => {
    let pagesQuantity = Math.ceil(props.totalMembersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesQuantity; i++ )
    {
        pages.push(i);
    }
    return <div> 
        <div>
            {pages.map((p) => <span id={p} key={p} onClick={() => {props.onPageChanged(p)}} className={props.currentPage === p ? styles.selected : undefined}>{p}</span>)}
        </div>
       
                {props.isLoading ? <Preloader /> : props.members.map(m => <div className={styles.members} key={m.id}>
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
                </div>)} 
{/*                 <div>{props.totalMembersCount}</div>
                <div>{pagesQuantity}</div> */}
                </div> 
    }

export default Members;