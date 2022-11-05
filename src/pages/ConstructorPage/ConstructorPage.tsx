import React, { useState } from 'react';
import { DirectionSelection, TypeSelection, Constructor, Pagination } from '../../components/ConstructorPage';
import s from './ConstructorPage.module.scss';
import { Id } from '../../common/types';
import { message } from 'antd';

type ConstructorProps = {};

export const ConstructorPage: React.FC<ConstructorProps> = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [selectedDirection, setSelectedDirection] = useState<Id>();
	const [selectedType, setSelectedType] = useState<Id>();
	const steps = [
		{
			title: 'Выберите направление подготовки',
			content: <DirectionSelection selectedDirection={selectedDirection} setSelected={setSelectedDirection} />,
		},
		{
			title: 'Как вы хотите использовать конструктор?',
			content: <TypeSelection selectedType={selectedType} setSelected={setSelectedType} />,
		},
		{ title: 'adsdsadas', content: <Constructor /> },
	];

	const onChangeStep = (step: number) => {
		if (step > currentStep && !selectedDirection) {
			message.warn('Необходимо выбрать направление подготовки');
		} else if (step === 2 && !selectedType) {
			message.warn('Необходимо выбрать тип конструктора');
		} else {
			setCurrentStep(step);
		}
	};

	return (
		<section className={s.wrapper}>
			<h4 className={s.title}>{steps[currentStep].title}</h4>
			<div className={s.content}>{steps[currentStep].content}</div>
			<Pagination total={steps.length} current={currentStep} onChange={onChangeStep} />
		</section>
	);
};
