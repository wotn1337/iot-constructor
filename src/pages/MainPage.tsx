import React from 'react';
import { MainPageContextProvider } from '../components/MainPage/Context';
import { MainPageContent } from '../components/MainPage/MainPageContent/MainPageContent';

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
	return (
		<MainPageContextProvider>
			<MainPageContent />
		</MainPageContextProvider>
	);
};
