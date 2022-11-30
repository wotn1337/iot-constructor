import React, { useEffect, useMemo, useState } from 'react';
import s from './ConstructorPageContent.module.scss';
import { DirectionSelection } from '../DirectionSelection/DirectionSelection';
import { TypeSelection } from '../TypeSelection/TypeSelection';
import { Constructor } from '../Constructor/Constructor';
import { AcademicPlan } from '../AcademicPlan/AcademicPlan';
import { setDisciplineId, useConstructorContext } from '../Context';
import { DisciplineModal } from '../DisciplineModal/DisciplineModal';
import { Navigation } from '../Navigation/Navigation';
import { useDisciplineQuery } from '../../../hooks/useDisciplineQuery';
import { Step, STEP_TYPES } from '../types';
import { PageInProgress } from '../../common/PageInProgress/PageInProgress';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

type ConstructorProps = {};

export const ConstructorPageContent: React.FC<ConstructorProps> = () => {
	const { pathname } = useLocation();
	const currentStepType = (pathname.split('/').pop() ?? STEP_TYPES.DIRECTION_SELECTION) as STEP_TYPES;
	const {
		state: { selectedType, disciplineId, semesters },
		dispatch,
	} = useConstructorContext();
	const {
		data: discipline,
		isFetching: disciplineFetching,
		isLoading: disciplineLoading,
	} = useDisciplineQuery(disciplineId);
	const [percent, setPercent] = useState<number>(0);
	const steps: Step[] = useMemo(
		() => [
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
		],
		[selectedType]
	);
	const currentStep = useMemo(() => steps.find((step) => step.type === currentStepType), [steps, currentStepType]);

	useEffect(() => {
		const finishedSemestersCount = semesters.filter((sem) => sem.finish).length;
		setPercent(finishedSemestersCount * (100 / semesters.length));
	}, [semesters]);

	return (
		<section className={s.wrapper}>
			<div className={s.inner}>
				<Routes>
					{steps.map((step) => (
						<Route
							key={step.type}
							path={step.type}
							element={
								<>
									<h4 className={s.title}>{step.title}</h4>
									<div className={s.content}>{step.content}</div>
								</>
							}
						/>
					))}
					<Route index element={<Navigate to={steps[0].type} />} />
				</Routes>
				<Navigation percent={percent} currentStep={currentStep} steps={steps} />
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
