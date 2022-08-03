const reducer = (state, action) => {

    switch (action.type) {
        case 'send_request': return {
            ...state,
            loading: action.payload[0],
            page: action.payload[1]
        }
        case 'request_finished': return {
            ...state,
            loading: action.payload
        }
        case 'set_data': return {
            ...state,
            articles: action.payload[0],
            totalResults: action.payload[1]
        }
        case 'update_request': return {
            ...state,
            page: action.payload
        }
        default: return 'error'
    }
}
export default reducer