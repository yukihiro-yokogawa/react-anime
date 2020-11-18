import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { NetworkState, SeasonState } from '../../type/type';

export const initialState: NetworkState = {
	items: {
		year: null,
		period: null,
		animeList: [
			{
				id: 1,
				title: '',
				title_short1: '',
				title_short2: '',
				title_short3: '',
				public_url: '',
				twitter_account: '',
				twitter_hash_tag: '',
				cours_id: null,
				created_at: '',
				updated_at: '',
				sex: null,
				city_code: null,
				sequel: null,
				city_name: '',
				product_companies: '',
			},
		],
	},
	loading: true,
	error: null,
};

const animeInfoSlice = createSlice({
	name: 'anime',
	initialState,
	reducers: {
		getAnnimeRequest: (state, action: PayloadAction<SeasonState>) => ({
			...state,
			items: action.payload,
		}),
		getAnnimeFailure: (state, action) => ({
			...state,
		}),
	},
});

export const { getAnnimeRequest } = animeInfoSlice.actions;

export default animeInfoSlice;

export const getAnnimeAsync = (year: number, period: number) => async (dispatch: (arg0: { payload: any; type: string }) => void) => {
	await axios.get(`http://api.moemoe.tokyo/anime/v1/master/${year}/${period}`).then((response) => {
		const animeList: SeasonState = { year: year, period: period, animeList: response.data };
		dispatch(getAnnimeRequest(animeList));
	});
};
