import React, { useEffect, useMemo, useState } from 'react';
import s from './ConstructorPageContent.module.scss';
import { DirectionSelection } from '../DirectionSelection/DirectionSelection';
import { TypeSelection } from '../TypeSelection/TypeSelection';
import { Constructor } from '../Constructor/Constructor';
import { setDisciplineId, setSelectedTrajectory, useConstructorContext } from '../Context';
import { DisciplineModal } from '../DisciplineModal/DisciplineModal';
import { Navigation } from '../Navigation/Navigation';
import { useDisciplineQuery } from '../../../hooks/useDisciplineQuery';
import { Step, STEP_TYPE } from '../types';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEducationalDirectionsQuery } from '../../../hooks/useEducationalDirections';
import { getBestTrajectory, getDirectionFullTitle } from '../../../common/utils';
import { Trajectories } from '../Trajectories/Trajectories';
import { TrajectoryAnalysis } from '../TrajectoryAnalysis/TrajectoryAnalysis';
import { BackgroundWrapper } from '../../common/BackgroundWrapper/BackgroundWrapper';

type ConstructorProps = {};

export const ConstructorPageContent: React.FC<ConstructorProps> = () => {
	const { pathname } = useLocation();
	const currentStepType = (pathname.split('/').pop() ?? STEP_TYPE.DIRECTION_SELECTION) as STEP_TYPE;
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
				type: STEP_TYPE.DIRECTION_SELECTION,
				pageTitle: 'Выбор направления подготовки',
			},
			{
				title: 'Как вы хотите использовать конструктор?',
				content: <TypeSelection />,
				type: STEP_TYPE.TYPE_SELECTION,
				pageTitle: 'Выбор типа конструктора',
			},
			{
				content: selectedType === STEP_TYPE.CONSTRUCTOR ? <Constructor /> : <Trajectories />,
				type: selectedType === STEP_TYPE.CONSTRUCTOR ? STEP_TYPE.CONSTRUCTOR : STEP_TYPE.TRAJECTORIES,
				title: selectedType === STEP_TYPE.CONSTRUCTOR ? undefined : 'Выберите желаемую траекторию',
				pageTitle: selectedType === STEP_TYPE.CONSTRUCTOR ? 'Конструктор траекторий' : 'Просмотр траекторий',
			},
			{
				content: <TrajectoryAnalysis />,
				type: STEP_TYPE.TRAJECTORY_ANALYSIS,
				pageTitle: 'Анализ траектории',
				title: 'Анализ твоей траектории',
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
			dispatch(setSelectedTrajectory(getBestTrajectory(tracks)));
		}
	}, [percent]);

	useEffect(() => {
		if (currentSemester) {
			// @ts-ignore
			window.ym(91451529, 'hit', pathname + '/' + currentSemester);
		}
	}, [currentSemester]);

	if (!selectedDirection && currentStepType !== STEP_TYPE.DIRECTION_SELECTION) {
		return <Navigate to={steps[0].type} />;
	}

	return (
		<>
			<Helmet>
				<title>{currentStep?.pageTitle}</title>
			</Helmet>
			<BackgroundWrapper>
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
												currentStep?.type !== STEP_TYPE.DIRECTION_SELECTION && (
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
			</BackgroundWrapper>
		</>
	);
};
