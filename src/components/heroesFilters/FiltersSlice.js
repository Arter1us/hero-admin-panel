import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload;
        },
        filtersFetching: (state) => {
            state.filtersLoadingStatus = 'loading';
        },
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = 'idle';
            state.filters = action.payload;
        },
        filtersFetchingError: (state) => {
            state.filtersLoadingStatus = 'error';
        }
    }
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    activeFilterChanged,
    filtersFetching,
    filtersFetched,
    filtersFetchingError
} = actions;