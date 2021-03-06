import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                state: this.props.status
            })
        }
    }

    activatedEditMode = () => {
        this.setState({editMode: true})
    };

    deactivatedEditMode = () => {
        this.setState({editMode: false});
        this.props.updateUserStatus(this.state.status)
    };

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    render(){
        return (
            <div>{!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activatedEditMode}>{this.props.status || `Status don't entered`}</span>
                </div>
                : <div>
                    <input onBlur={this.deactivatedEditMode}
                           onChange={this.changeStatus}
                           type="text"
                           autoFocus={true}
                           value={this.state.status} />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;