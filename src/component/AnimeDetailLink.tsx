import React from 'react';
import { useAnimeState } from '../ducks/anime/selectors';

const Detail = (): JSX.Element => {
	const animeList = useAnimeState().anime.items.animeList;

	const titleList = [];
	Object.keys(animeList).map((animeInfo) => {
		titleList.push(<div key={animeList[animeInfo]?.id}>{animeList[animeInfo]?.title}</div>);
	});

	return <>{titleList}</>;
};

export default Detail;
