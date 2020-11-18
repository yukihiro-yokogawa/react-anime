export type NetworkState = {
	items: SeasonState;
	loading: boolean;
	error: boolean;
};

export type AnimeInfoState = {
	id: number;
	title: string;
	title_short1: string;
	title_short2: string;
	title_short3: string;
	public_url: string;
	twitter_account: string;
	twitter_hash_tag: string;
	cours_id: number;
	created_at: string;
	updated_at: string;
	sex: number;
	city_code: number;
	sequel: number;
	city_name: string;
	product_companies: string;
};

export type SeasonState = {
	year: number;
	period: number;
	animeList: Array<AnimeInfoState>;
};
