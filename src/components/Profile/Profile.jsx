import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({store}) => {

    return (  <div>
<ProfileInfo avatar="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" description="just a nice guy" />
<MyPostsContainer store={store} />
    </div>
    )
}
export default Profile;