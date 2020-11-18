import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '~/component/Button';
import createPeriods from '~/util/createPeriod';
import { getAnnimeAsync } from '../ducks/anime/slice';
import * as styles from '../css/style.module.scss';

const date = new Date();

const SeasonList = (): JSX.Element => {
	const dispatch = useDispatch();

	const buttonList = [];

	const [animeInfo, setAnimeInfo] = useState({
		year: date.getFullYear(),
		period: createPeriods(date.getMonth() + 1),
		seasons: [
			{
				season: '冬',
				period: 4,
			},
			{
				season: '秋',
				period: 3,
			},
			{
				season: '夏',
				period: 2,
			},
			{
				season: '春',
				period: 1,
			},
		],
	});

	const getDefaultAnimeList = () => {
		dispatch(getAnnimeAsync(date.getFullYear(), createPeriods(date.getMonth() + 1)));
	};

	const handleClickSetSeason = (year: number, period: number) => {
		setAnimeInfo({
			...animeInfo,
			year: year,
			period: period,
		});
	};

	for (let i = date.getFullYear(); 2014 <= i; i--) {
		animeInfo.seasons.map((season) => {
			buttonList.push(
				<Button
					key={`${i} ${season.period}`}
					year={i}
					season={season.season}
					period={season.period}
					handleClick={(year: number, period: number) => handleClickSetSeason(year, period)}
				></Button>,
			);
		});
	}

	useEffect(() => {
		dispatch(getAnnimeAsync(animeInfo.year, animeInfo.period));
	}, [animeInfo.year, animeInfo.period]);

	return (
		<div className={styles.menue_bar}>
			<div onLoad={getDefaultAnimeList}>{buttonList}</div>
		</div>
	);
};

export default SeasonList;
