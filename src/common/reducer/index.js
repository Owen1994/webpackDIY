const commonData = (state = {userName: 'Owen'}, action) => {
    switch(action.type) {
        case 'commonDataAction':
            return {
                ...action.payload
            }
        default:
            return {
                ...state
            }
    }
}
export default commonData;