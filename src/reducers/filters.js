const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
};

const filters = (state = initialState, action) => {
    switch(action.type) {
        case 'ACTIVE_FILTER_CHANGED':
                return {
                    ...state,
                    activeFilter: action.payload
                }
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filtersLoadingStatus: 'idle',
                filters: action.payload
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        default: return state;
    }
};

export default filters;