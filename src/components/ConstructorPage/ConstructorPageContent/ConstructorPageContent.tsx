import React, { useEffect, useState } from 'react';
import s from './ConstructorPageContent.module.scss';
import { message } from 'antd';
import { DirectionSelection } from '../DirectionSelection/DirectionSelection';
import { TypeSelection } from '../TypeSelection/TypeSelection';
import { Constructor } from '../Constructor/Constructor';
import { AcademicPlan } from '../AcademicPlan/AcademicPlan';
import { setCurrentStep, setDisciplineId, useConstructorContext } from '../Context';
import { DisciplineModal } from '../DisciplineModal/DisciplineModal';
import { Navigation } from '../Navigation/Navigation';
import { useDisciplineQuery } from '../../../hooks/useDisciplineQuery';
import { Step, STEP_TYPES } from '../types';
import { PageInProgress } from '../../common/PageInProgress/PageInProgress';

type ConstructorProps = {};

export const ConstructorPageContent: React.FC<ConstructorProps> = () => {
	const {
		state: { currentStep, selectedDirection, selectedType, disciplineId, semesters },
		dispatch,
	} = useConstructorContext();
	const {
		data: discipline,
		isFetching: disciplineFetching,
		isLoading: disciplineLoading,
	} = useDisciplineQuery(disciplineId);
	const [percent, setPercent] = useState<number>(0);
	const steps: Step[] = [
		{
			title: 'Выберите направление подготовки',
			content: <DirectionSelection />,
			type: STEP_TYPES.DIRECTION_SELECTION,
		},
		{
			title: 'Как вы хотите использовать конструктор?',
			content: <TypeSelection />,
			type: STEP_TYPES.TYPE_SELECTION,
		},
		{
			content:
				selectedType === STEP_TYPES.CONSTRUCTOR ? (
					<Constructor />
				) : (
					<PageInProgress page="Просмотр траекторий" />
				),
			type: selectedType === STEP_TYPES.CONSTRUCTOR ? STEP_TYPES.CONSTRUCTOR : STEP_TYPES.TRAJECTORIES,
		},
		{ content: <AcademicPlan />, type: STEP_TYPES.ACADEMIC_PLAN },
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

	useEffect(() => {
		const finishedSemestersCount = semesters.filter((sem) => sem.finish).length;
		setPercent(finishedSemestersCount * (100 / semesters.length));
	}, [semesters]);

	return (
		<section className={s.wrapper}>
			<div className={s.inner}>
				{steps[currentStep].title && <h4 className={s.title}>{steps[currentStep].title}</h4>}
				<div className={s.content}>{steps[currentStep].content}</div>
				<Navigation
					onNext={
						currentStep !== steps.length - 1 &&
						!(currentStep === 2 && selectedType === STEP_TYPES.TRAJECTORIES)
							? () => onChangeStep(currentStep + 1)
							: undefined
					}
					onBack={currentStep !== 0 ? () => onChangeStep(currentStep - 1) : undefined}
					percent={percent}
					stepType={steps[currentStep].type}
				/>
				<DisciplineModal
					discipline={discipline}
					loading={disciplineLoading || disciplineFetching}
					open={!!disciplineId}
					onCancel={() => dispatch(setDisciplineId(undefined))}
				/>
			</div>
		</section>
	);
};
