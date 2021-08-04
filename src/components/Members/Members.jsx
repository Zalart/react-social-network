import React from 'react';
import styles from './Members.module.css';
import noPhoto from '../../assets/images/user.svg'
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                    <div className={styles.member}><NavLink to={'/profile/' + m.id}><img src={m.photos.large ? m.photos.large : noPhoto } alt={m.name}/></NavLink></div>
                <div>
                    <button id={m.id} onClick={() => {
                        m.followed ?
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {withCredentials: true,
                                headers: {
                                    "API-KEY": "b55c9dc7-fb66-4d82-a5cf-50a73f5d33a0"
                                }
                            })
                            .then(response => {
                                if(response.data.resultCode === 0) {
                                    props.followMember(m.id);
                                }
                                })
                         :
                         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "b55c9dc7-fb66-4d82-a5cf-50a73f5d33a0"
                                } 
                            })
                    .then(response => {
                        if(response.data.resultCode === 0) {
                            props.followMember(m.id);
                        }
                        })

                }
            }
                    >
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