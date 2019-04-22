
const commonDataAction = (value) => {
    return {
        type: 'commonDataAction',
        payload: value
    }
}

const changeCommonData = () => (dispatch) => {
    dispatch(commonDataAction({ userName: 'xupeiwen(i changed)' }));
}

export default changeCommonData;