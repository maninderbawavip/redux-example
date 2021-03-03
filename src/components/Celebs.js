import { Component } from "react";
import { connect } from "react-redux";
import { AppContext } from "../contexts/AppContext";
import { loadCelebsData } from "../redux/actions";

class Celebs extends Component{

    static contextType = AppContext;
    
    componentDidMount() {
        this.props.loadCelebsData()
    }

    render(){
        console.log(this.props)

        const { currentTheme, changeTheme } = this.context;
        return(<div>
            from celebs component {currentTheme}
            <button onClick={() => {changeTheme()}}>change it</button>
            {/* {this.props.loading ? "data is loading..." : this.props.data.map((each) => <div>{each.name}</div>)} */}
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