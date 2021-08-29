import React from 'react';
import {Field, reduxForm} from 'redux-form';

let AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
        <h3>Add Post</h3>
      <div>
        <div><Field component={'textarea'} name={'newPost'} placeholder={'Share yourself with the universe...'} ></Field></div>
        <button type={'submit'}>Add post</button>
      </div>
      </form>
    )
}

AddPostForm = reduxForm({
    form: 'addPost'
})(AddPostForm);

export default AddPostForm;