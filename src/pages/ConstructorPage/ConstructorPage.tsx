import React, { useState } from 'react';
import { DirectionSelection, TypeSelection, Constructor, Pagination } from '../../components/ConstructorPage';
import s from './ConstructorPage.module.scss';
import { Id } from '../../common/types';

type ConstructorProps = {};

export const ConstructorPage: React.FC<ConstructorProps> = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [selectedDirection, setSelectedDirection] = useState<Id>();
	const steps = [
		{
			title: 'Выберите направление подготовки',
			content: <DirectionSelection selected={selectedDirection} setSelected={setSelectedDirection} />,
		},
		{ title: 'Как вы хотите использовать конструктор?', content: <TypeSelection /> },
		{ title: 'adsdsadas', content: <Constructor /> },
	];

	return (
		<section className={s.wrapper}>
			<h4 className={s.title}>{steps[currentStep].title}</h4>
			<div className={s.content}>{steps[currentStep].content}</div>
			<Pagination total={steps.length} current={currentStep} onChange={setCurrentStep} />
		</section>
	);
};
