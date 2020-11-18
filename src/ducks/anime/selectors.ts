import { useSelector } from 'react-redux';
import { NetworkState } from '../../type/type';

export const useAnimeState = () => {
	return useSelector((state: { anime: NetworkState }) => state);
};
