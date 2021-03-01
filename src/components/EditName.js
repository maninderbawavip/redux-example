import { Component } from "react";
import { connect } from "react-redux";

class EditName extends Component {

    constructor(props){
        super(props)
        this.state = {
            inputValue: ""
        }
    }

    render() {
        const { inputValue } = this.state
        return (
            <>
                <input type="text" value={inputValue} onChange={(e) => {this.setState({ inputValue: e.target.value})}}  />
                <button 
                    onClick={() => this.props.dispatch({ type: "update_user", data: inputValue })}
                >Trigger Action</button>
            </>
        )
    }
}


export default connect(null)(EditName);