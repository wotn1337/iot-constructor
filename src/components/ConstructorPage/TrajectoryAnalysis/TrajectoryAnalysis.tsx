import React, { useEffect } from 'react';
import { useProfessionalTrajectoryByIdQuery } from '../../../hooks/useProfessionalTrajectoryByIdQuery';
import { TrajectoryInfo } from './TrajectoryInfo/TrajectoryInfo';
import { Loader } from '../../common/Loader/Loader';
import { setFinalAcademicPlan, useConstructorContext } from '../Context';
import { AcademicPlan } from '../AcademicPlan/AcademicPlan';
import { Space } from 'antd';
import { useEducationalModules } from '../../../hooks/useEducationalModules';
import { STEP_TYPE } from '../types';
import { getAcademicSemestersFromConstructor, getAcademicSemestersFromTrajectory } from './utils';
import { GreatChoice } from './GreatChoice/GreatChoice';

type TrajectoryAnalysisProps = {};

export const TrajectoryAnalysis: React.FC<TrajectoryAnalysisProps> = () => {
	const {
		state: { selectedTrajectory, semesters: constructorSemesters, selectedDirection, selectedType, academicPlan },
		dispatch,
	} = useConstructorContext();
	const { data, isFetching, isLoading, refetch } = useProfessionalTrajectoryByIdQuery(selectedTrajectory);
	const { trajectorySemesters, loading } = useEducationalModules(selectedDirection, undefined, selectedTrajectory);

	useEffect(() => {
		refetch();
	}, [selectedTrajectory]);

	useEffect(() => {
		switch (selectedType) {
			case STEP_TYPE.CONSTRUCTOR: {
				dispatch(setFinalAcademicPlan(getAcademicSemestersFromConstructor(constructorSemesters)));
				break;
			}
			case STEP_TYPE.TRAJECTORIES: {
				dispatch(
					setFinalAcademicPlan(getAcademicSemestersFromTrajectory(trajectorySemesters, selectedTrajectory))
				);
				break;
			}
		}
	}, [trajectorySemesters, constructorSemesters, selectedTrajectory, selectedType]);

	useEffect(() => {
		window.scroll({ top: 0 });
	}, []);

	return (
		<Loader loading={isLoading || isFetching || loading} size="large">
			<Space direction="vertical" size={100}>
				<GreatChoice />
				{data && <TrajectoryInfo {...data} />}
				{!!academicPlan && !!academicPlan.length && <AcademicPlan semesters={academicPlan} />}
			</Space>
		</Loader>
	);
};
