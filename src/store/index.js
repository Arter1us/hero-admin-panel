import { configureStore } from '@reduxjs/toolkit';

import heroes from '../components/heroesList/HeroesSlice';
import filters from '../components/heroesFilters/FiltersSlice';

const store = configureStore({
    reducer: {heroes, filters}
});

export default store;