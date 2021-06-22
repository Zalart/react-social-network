import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, addPost, changePost}) => {

    return (  <div>
<ProfileInfo avatar="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" description="just a nice guy" />
<MyPosts posts={profilePage.posts} addPost={addPost} changePost={changePost} currentPost={profilePage.postMessage} />
    </div>
    )
}
export default Profile;