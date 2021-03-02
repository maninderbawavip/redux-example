import { Component } from "react";
import { connect } from "react-redux";
import { loadCelebsData } from "../redux/actions";

class Celebs extends Component{

    componentDidMount() {
        this.props.loadCelebsData()
    }

    render(){
        console.log(this.props)
        return(<div>
            {this.props.loading ? "data is loading..." : this.props.data.map((each) => <div>{each.name}</div>)}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return({
        loading: state.celebsTable.loading ,
        error: state.celebsTable.error,
        data: state.celebsTable.celebs
    })
}

export default connect(mapStateToProps, { loadCelebsData })(Celebs)