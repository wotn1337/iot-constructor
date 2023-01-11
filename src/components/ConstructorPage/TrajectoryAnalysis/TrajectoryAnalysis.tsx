import React, { useEffect, useState } from 'react';
import { useProfessionalTrajectoryByIdQuery } from '../../../hooks/useProfessionalTrajectoryByIdQuery';
import { TrajectoryInfo } from './TrajectoryInfo/TrajectoryInfo';
import { Loader } from '../../common/Loader/Loader';
import { useConstructorContext } from '../Context';
import { AcademicPlan } from '../AcademicPlan/AcademicPlan';
import { Space } from 'antd';
import { useEducationalModules } from '../../../hooks/useEducationalModules';
import { Semester } from '../AcademicPlan/types';
import { STEP_TYPE } from '../types';
import { getAcademicSemestersFromConstructor, getAcademicSemestersFromTrajectory } from './utils';
import { GreatChoice } from './GreatChoice/GreatChoice';

type TrajectoryAnalysisProps = {};

export const TrajectoryAnalysis: React.FC<TrajectoryAnalysisProps> = () => {
	const {
		state: { selectedTrajectory, semesters: constructorSemesters, selectedDirection, selectedType },
	} = useConstructorContext();
	const { data, isFetching, isLoading, refetch } = useProfessionalTrajectoryByIdQuery(selectedTrajectory);
	const { trajectorySemesters, loading } = useEducationalModules(selectedDirection, undefined, selectedTrajectory);
	const [semesters, setSemesters] = useState<Semester[]>();

	useEffect(() => {
		refetch();
	}, [selectedTrajectory]);

	useEffect(() => {
		switch (selectedType) {
			case STEP_TYPE.CONSTRUCTOR: {
				setSemesters(getAcademicSemestersFromConstructor(constructorSemesters));
				break;
			}
			case STEP_TYPE.TRAJECTORIES: {
				setSemesters(getAcademicSemestersFromTrajectory(trajectorySemesters, selectedTrajectory));
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
				{!!semesters && !!semesters.length && <AcademicPlan semesters={semesters} />}
			</Space>
		</Loader>
	);
};
