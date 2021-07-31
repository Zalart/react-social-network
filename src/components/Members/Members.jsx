import axios from 'axios';
import React from 'react';
import styles from './Members.module.css';
import noPhoto from '../../assets/images/user.svg'


class Members extends React.Component {
/*     constructor(props){
        super(props);
    } */
    componentDidMount(){

        /*  if (this.props.members.length === 0) { */
             axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&${this.props.pageSize}`)
             .then(response => 
                 {
                     this.props.setMembers(response.data.items);
                     this.props.setTotalMembersCount(response.data.totalCount);
                 });
                 //setTimeout(()=> alert('Timeout in didMount'), 3000)
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&${this.props.pageSize}`)
        .then(response => 
            {
                this.props.setMembers(response.data.items);
                
            });
    }

   /*  componentDidUpdate(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&${this.props.pageSize}`)
        .then(response => 
            {
                this.props.setMembers(response.data.items);
                this.props.setTotalMembersCount(response.data.totalCount);
            });
      
    } */

    componentWillUnmount(){

    
    }

    render() {
        let pagesQuantity = Math.ceil(this.props.totalMembersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesQuantity; i++ )
        {
            pages.push(i);
        }
    return <div> 
<div>
    {pages.map((p) => <span id={p} key={p} onClick={() => {this.onPageChanged(p)}} className={this.props.currentPage === p ? styles.selected : undefined}>{p}</span>)}
</div>
        {this.props.members.map(m => <div className={styles.members} key={m.id}>
        <span>
            <div className={styles.member}><img src={m.photos.large ? m.photos.large : noPhoto } alt={m.name}/></div>
        <div>
            <button id={m.id} onClick={() => this.props.followMember(m.id)} >
            {m.followed ? 'Unfollow' : 'Follow'}
            </button>
            </div>
        </span>
        <span><div>{m.name}</div>
        <div>Studying</div></span>

        <span><div>Минск</div><div>Беларусь</div></span>
        </div>)} 
        <div>{this.props.totalMembersCount}</div>
        <div>{pagesQuantity}</div>
        </div> 
}

}

export default Members;