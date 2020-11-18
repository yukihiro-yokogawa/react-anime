import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import createStore from '../ducks/createStore';
import * as styles from '../css/style.module.scss';

import SideMenue from '../container/SideMenue';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={createStore()}>
			<div className={styles.main_content}>
				<SideMenue />
				<Component {...pageProps} />
			</div>
		</Provider>
	);
};

export default MyApp;
