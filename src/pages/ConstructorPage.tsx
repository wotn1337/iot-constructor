import React, { useState } from 'react';
import { DirectionSelection, TypeSelection, Constructor, Pagination } from '../components/ConstructorPage';

type ConstructorProps = {};

export const ConstructorPage: React.FC<ConstructorProps> = () => {
	const steps = [
		{ title: 'Выберите направление подготовки', content: <DirectionSelection /> },
		{ title: 'Как вы хотите использовать конструктор?', content: <TypeSelection /> },
		{ title: '', content: <Constructor /> },
	];
	const [currentStep, setCurrentStep] = useState(2);

	return (
		<section>
			<h1>{steps[currentStep].title}</h1>
			{steps[currentStep].content}
			<Pagination total={steps.length} current={currentStep} onChange={setCurrentStep} />
		</section>
	);
};
