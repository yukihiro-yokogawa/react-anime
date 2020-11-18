import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import animeInfoSlice, { initialState as networkState } from './anime/slice';

const rootReducer = combineReducers({
	anime: animeInfoSlice.reducer,
});

const preloadedState = () => {
	return { anime: networkState };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
	const middlewareList = [...getDefaultMiddleware(), logger];
	return configureStore({
		reducer: rootReducer,
		middleware: middlewareList,
		devTools: process.env.NODE_ENV !== 'production',
		preloadedState: preloadedState(),
	});
};

export default createStore;
