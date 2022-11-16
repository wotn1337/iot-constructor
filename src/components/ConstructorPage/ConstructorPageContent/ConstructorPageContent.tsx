import React from 'react';
import s from './ConstructorPageContent.module.scss';
import { message } from 'antd';
import { DirectionSelection } from '../DirectionSelection/DirectionSelection';
import { TypeSelection } from '../TypeSelection/TypeSelection';
import { Constructor } from '../Constructor/Constructor';
import { AcademicPlan } from '../AcademicPlan/AcademicPlan';
import { setCurrentStep, useConstructorContext } from '../Context';
import { NavigationTitle } from '../NavigationTitle/NavigationTitle';

type ConstructorProps = {};

export const ConstructorPageContent: React.FC<ConstructorProps> = () => {
	const {
		state: { currentStep, selectedDirection, selectedType },
		dispatch,
	} = useConstructorContext();
	const steps = [
		{
			title: 'Выберите направление подготовки',
			content: <DirectionSelection />,
		},
		{
			title: 'Как вы хотите использовать конструктор?',
			content: <TypeSelection />,
		},
		{ title: '', content: <Constructor selectedDirection={selectedDirection ?? 1} /> },
		{ title: '', content: <AcademicPlan /> },
	];

	const onChangeStep = (step: number) => {
		if (step > currentStep && !selectedDirection) {
			message.warn('Необходимо выбрать направление подготовки');
		} else if (step === 2 && !selectedType) {
			message.warn('Необходимо выбрать тип конструктора');
		} else {
			dispatch(setCurrentStep(step));
		}
	};

	return (
		<section className={s.wrapper}>
			<NavigationTitle
				title={steps[currentStep].title}
				onNext={currentStep < 2 ? () => onChangeStep(currentStep + 1) : undefined}
				onBack={currentStep !== 0 ? () => onChangeStep(currentStep - 1) : undefined}
			/>
			<div className={s.content}>{steps[currentStep].content}</div>
		</section>
	);
};
