import React from 'react';

class ProfileStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isStatusEditable: false,
            status: this.props.profileStatus
        };
    }
componentDidMount(){
    console.log('component mounted')
}
    componentDidUpdate(prevProps, prevState){
        console.log('component updated', prevProps.profileStatus, this.props.profileStatus)
        if (prevProps.profileStatus !== this.props.profileStatus){
            console.log('here')
/*     this.setState({
        status: this.props.profileStatus
    }) */
}
    }

    activateEditingStatus = () => {
        this.setState({
            isStatusEditable: true
        })
    }
    deActivateEditingStatus = () => {
        this.setState({
            isStatusEditable: false
        })
        this.props.updateProfileStatus(this.state.status)
    }
    updateLocalStatus = (e) => {

        this.setState({
            status: e.currentTarget.value
        })
    }
    render(){
        console.log('component rendered')
        return (
            <>
            {
            !this.state.isStatusEditable &&
            <div><span onClick={this.activateEditingStatus}>{this.props.profileStatus}</span></div>
             }
             { (this.state.isStatusEditable || this.props.profileStatus==="") &&
            <div><input autoFocus={true} onChange={this.updateLocalStatus} onBlur={this.deActivateEditingStatus} value={this.state.status} /></div>
            }
            </>
        )
    }

}
export default ProfileStatus;