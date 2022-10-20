import React from 'react';
import { Intro, About, StudentReview, Advantages, Professions } from '../components';

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
	return (
		<section style={{ paddingBottom: 128 }}>
			<Intro />
			<About />
			<Advantages />
			<StudentReview />
			<Professions />
		</section>
	);
};
