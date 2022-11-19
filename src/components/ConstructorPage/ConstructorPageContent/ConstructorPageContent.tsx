import React, { useState } from 'react';
import s from './ConstructorPageContent.module.scss';
import { message } from 'antd';
import { DirectionSelection } from '../DirectionSelection/DirectionSelection';
import { TypeSelection } from '../TypeSelection/TypeSelection';
import { Constructor } from '../Constructor/Constructor';
import { AcademicPlan } from '../AcademicPlan/AcademicPlan';
import { Pagination } from '../Pagination/Pagination';
import { setCurrentStep, useConstructorContext } from '../Context';
import { DisciplinModal } from '../DisciplinModal/DisciplinModal';

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
	const [disciplinId, setDisciplinId] = useState();

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
			<h4 className={s.title}>{steps[currentStep].title}</h4>
			<div className={s.content}>{steps[currentStep].content}</div>
			<Pagination total={steps.length} current={currentStep} onChange={onChangeStep} />
			<DisciplinModal open={!!disciplinId} onCancel={() => setDisciplinId(undefined)} />
		</section>
	);
};
