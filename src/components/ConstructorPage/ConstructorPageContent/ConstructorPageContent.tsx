import React, { useEffect, useMemo, useState } from 'react';
import s from './ConstructorPageContent.module.scss';
import { DirectionSelection } from '../DirectionSelection/DirectionSelection';
import { TypeSelection } from '../TypeSelection/TypeSelection';
import { Constructor } from '../Constructor/Constructor';
import { setDisciplineId, setSelectedTrajectory, useConstructorContext } from '../Context';
import { DisciplineModal } from '../DisciplineModal/DisciplineModal';
import { Navigation } from '../Navigation/Navigation';
import { useDisciplineQuery } from '../../../hooks/useDisciplineQuery';
import { Step, STEP_TYPES } from '../types';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEducationalDirectionsQuery } from '../../../hooks/useEducationalDirections';
import { getDirectionFullTitle } from '../../../common/utils';
import { Trajectories } from '../Trajectories/Trajectories';
import { TrajectoryAnalysis } from '../TrajectoryAnalysis/TrajectoryAnalysis';

type ConstructorProps = {};

export const ConstructorPageContent: React.FC<ConstructorProps> = () => {
	const { pathname } = useLocation();
	const currentStepType = (pathname.split('/').pop() ?? STEP_TYPES.DIRECTION_SELECTION) as STEP_TYPES;
	const {
		state: { selectedType, disciplineId, semesters, currentSemester, selectedDirection, tracks },
		dispatch,
	} = useConstructorContext();
	const {
		data: discipline,
		isFetching: disciplineFetching,
		isLoading: disciplineLoading,
	} = useDisciplineQuery(disciplineId);
	const { data: educationalDirections } = useEducationalDirectionsQuery();
	const [percent, setPercent] = useState<number>(0);
	const steps: Step[] = useMemo(
		() => [
			{
				title: 'Выберите направление подготовки',
				content: <DirectionSelection />,
				type: STEP_TYPES.DIRECTION_SELECTION,
				pageTitle: 'Выбор направления подготовки',
			},
			{
				title: 'Как вы хотите использовать конструктор?',
				content: <TypeSelection />,
				type: STEP_TYPES.TYPE_SELECTION,
				pageTitle: 'Выбор типа конструктора',
			},
			{
				content: selectedType === STEP_TYPES.CONSTRUCTOR ? <Constructor /> : <Trajectories />,
				type: selectedType === STEP_TYPES.CONSTRUCTOR ? STEP_TYPES.CONSTRUCTOR : STEP_TYPES.TRAJECTORIES,
				title: selectedType === STEP_TYPES.CONSTRUCTOR ? undefined : 'Выберите желаемую траекторию',
				pageTitle: selectedType === STEP_TYPES.CONSTRUCTOR ? 'Конструктор траекторий' : 'Просмотр траекторий',
			},
			{
				content: <TrajectoryAnalysis />,
				type: STEP_TYPES.TRAJECTORY_ANALYSIS,
				pageTitle: 'Анализ траектории',
			},
		],
		[selectedType]
	);
	const currentStep = useMemo(() => steps.find((step) => step.type === currentStepType), [steps, currentStepType]);

	useEffect(() => {
		const finishedSemestersCount = semesters.filter((sem) => sem.finish).length;
		setPercent(finishedSemestersCount * (100 / semesters.length));
	}, [semesters]);

	useEffect(() => {
		if (percent >= 100) {
			const tracksCopy = [...tracks];
			tracksCopy.sort((a, b) => b.points - a.points);
			console.log(tracksCopy);
			dispatch(setSelectedTrajectory(tracksCopy[0].id));
		}
	}, [percent]);

	useEffect(() => {
		if (currentSemester) {
			// @ts-ignore
			window.ym(91451529, 'hit', pathname + '/' + currentSemester);
		}
	}, [currentSemester]);

	return (
		<>
			<Helmet>
				<title>{currentStep?.pageTitle}</title>
			</Helmet>
			<section className={s.wrapper}>
				<div className={s.inner}>
					<Routes>
						{steps.map((step) => (
							<Route
								key={step.type}
								path={step.type}
								element={
									<>
										<div className={s.pageHeader}>
											<h4 className={s.title}>{step.title}</h4>
											{selectedDirection &&
												currentStep?.type !== STEP_TYPES.DIRECTION_SELECTION &&
												currentStep?.type !== STEP_TYPES.TRAJECTORY_ANALYSIS && (
													<span className={s.direction}>
														{getDirectionFullTitle(
															selectedDirection,
															educationalDirections
														)}
													</span>
												)}
										</div>
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
		</>
	);
};
