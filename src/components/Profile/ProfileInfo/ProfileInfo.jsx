import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader"
import {Link} from "react-router-dom";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({profile, profileStatus, updateProfileStatus}) => {
  if (!profile) {
    return <Preloader />
  }
    return (<div className={styles.profile}>
      <div className={styles.profileMain}><div className={styles.fullName}>{profile.fullName} <br/><img className={styles.photo} alt={profile.fullName} src={profile.photos.large}/></div>
      <div className={styles.profileContacts}>Contacts: <br/>
     <Link to={profile.contacts.facebook} target='_blank' >Facebook</Link><br/>
      <Link to={profile.contacts.vk} target='_blank' >VK</Link><br/>
      <Link to={profile.contacts.twitter} target='_blank' >Twitter</Link><br/>
      <Link to={profile.contacts.instagram} target='_blank' >Instagram</Link><br/>

      </div>
      <div className={styles.profileDescription}>
      Looking for a job: {profile.lookingForAJob ? '✅' : '❌'}<br/>
      {profile.lookingForAJobDescription}<br/>
      Main info: {profile.aboutMe}<br/>
      </div>
      </div> 
      <div><ProfileStatus profileStatus={profileStatus} updateProfileStatus={updateProfileStatus}/></div>
      </div>
    )
}

export default ProfileInfo;