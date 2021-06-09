import styles from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
    return (<div>
        <div> <img src={props.avatar}/>
      </div>      
      <div className={styles.descriptionBlock}>{props.description}</div>
      </div>
    )
}

export default ProfileInfo;