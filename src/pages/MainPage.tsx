import React from 'react';
import { Intro } from '../components';
import { About } from '../components/MainPage/About/About';
import { Advantages } from '../components/MainPage';

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
	return (
		<>
			<Intro />
			<About />
			<Advantages />
		</>
	);
};
