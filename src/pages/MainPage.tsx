import React from 'react';
import { Intro, About, StudentReview, Advantages, Professions } from '../components';
import { Partners } from '../components/MainPage/Partners/Partners';
import { MobileApp } from '../components/MainPage/MobileApp/MobileApp';

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
	return (
		<section>
			<Intro />
			<About />
			<Advantages />
			<StudentReview />
			<Professions />
			<Partners />
			<MobileApp />
		</section>
	);
};
