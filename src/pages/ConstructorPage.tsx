import React from 'react';
import { ConstructorPageContent } from '../components/ConstructorPage';
import { ConstructorContextProvider } from '../components/ConstructorPage/Context';

type ConstructorProps = {};

export const ConstructorPage: React.FC<ConstructorProps> = () => {
	return (
		<ConstructorContextProvider>
			<ConstructorPageContent />
		</ConstructorContextProvider>
	);
};
