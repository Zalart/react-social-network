import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {logInProcess, getAuth} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';



const LoginForm = (props) => {

    return (<form onSubmit={props.handleSubmit}>
        <div><Field component={'input'} name={'email'} placeholder={'Email'} /></div>
        <div><Field component={'input'} name={'password'} placeholder={'Password'} /></div>
        <div><Field id={'rememberMe'} component={'input'} name={'rememberMe'} type={'checkbox'} /><label htmlFor={'rememberMe'}>remember me</label></div>
        <div><button>Login</button></div>
    </form>)
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = (props) => {

    if(props.isAuthorised) {
        return <Redirect to='/profile' />
    }

    const  onSubmit = async (formData) => {
       await props.logInProcess(formData);
          await props.getAuth();

    }

    return (<div><h1>Login</h1>
    <div><LoginReduxForm onSubmit={onSubmit} /></div></div> )
}
let mapStateToProps = (state) => {
    return {
        isAuthorised: state.auth.isAuthorised 
    }

}

export default connect(mapStateToProps,{logInProcess, getAuth})(Login);