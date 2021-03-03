import { Component } from "react";
import { connect } from "react-redux";
import { AppContext } from "../contexts/AppContext";
import { loadCelebsData } from '../redux/actions'


class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }
    static contextType = AppContext;

    handleChange(value) {
        this.setState({ value })
        this.props.loadCelebsData(value)
    }

    render() {
        return (<div>
            from search component {this.context.currentTheme}
            <input type="text"
                value={this.state.value}
                onChange={
                    (e) => {
                        this.handleChange(e.target.value)
                    }}></input>
        </div>)
    }
}

export default connect(null, { loadCelebsData })(Search);