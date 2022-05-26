const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
};

const heroes = (state = initialState, action) => {
    switch(action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroesLoadingStatus: 'idle',
                heroes: action.payload
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        default: return state;
    }
};

export default heroes;