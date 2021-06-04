import styles from "./Profile.module.css";

const Profile = () => {
    return (  <div className={styles.content}>
    <div> <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
      </div>
      <div>
      <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" /></div>
      
      <div>ava + description</div>
      <div>my posts
        <div>New post</div>
      </div>
      <div>
       <h4>New posts</h4> 
       <div className={styles.item}>post 1</div>
       <div className={styles.item}>post 2</div>
       <div className={styles.item}>post 3</div>


      </div>
    </div>
    )
}
export default Profile;