import { connect } from 'react-redux';
import App from '../app';
import changeCommonData from '../actions';

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps);
    return {
        ...state,
        ...ownProps
    }
}

export default connect(mapStateToProps, {changeCommonData})(App);