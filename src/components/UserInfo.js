import { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {

    render() {
        return (
            <>
                <div>logged in user is {this.props.userFromProps}</div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { userFromProps: state.userTable.user }
}

export default connect(mapStateToProps)(UserInfo);