import React from 'react';
import { Intro } from '../components';
import { About } from '../components/MainPage/About/About';

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
	return (
		<>
			<Intro />
			<About />
		</>
	);
};
