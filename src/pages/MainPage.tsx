import React from 'react';
import { Intro, About, StudentReview } from '../components';

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
	return (
		<>
			<section style={{ paddingBottom: 128 }}>
				<Intro />
				<About />
				<StudentReview />
			</section>
		</>
	);
};
