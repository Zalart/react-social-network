import { Redirect } from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

   if (!props.isAuthorised) {
       return <Redirect to='/login' /> }

    return (  <div>
<ProfileInfo profile={props.profile} />
<MyPostsContainer />
    </div>
    )
}
export default Profile;