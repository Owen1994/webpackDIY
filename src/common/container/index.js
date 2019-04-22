import { connect } from 'react-redux';
import App from '../app';
import changeCommonData from '../actions';
import { filterNameSelector } from '../selector'

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps);
    console.log(filterNameSelector(state));
    return {
        ...state,
        ...ownProps
    }
}

export default connect(mapStateToProps, {changeCommonData})(App);