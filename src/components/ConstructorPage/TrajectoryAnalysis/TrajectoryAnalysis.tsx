import React, { useEffect } from 'react';
import { useProfessionalTrajectoryByIdQuery } from '../../../hooks/useProfessionalTrajectoryByIdQuery';
import { TrajectoryInfo } from './TrajectoryInfo/TrajectoryInfo';
import { Loader } from '../../common/Loader/Loader';
import { useConstructorContext } from '../Context';
import { AcademicPlan } from '../AcademicPlan/AcademicPlan';
import { Space } from 'antd';
import { useEducationalModules } from '../../../hooks/useEducationalModules';

type TrajectoryAnalysisProps = {};

export const TrajectoryAnalysis: React.FC<TrajectoryAnalysisProps> = () => {
	const {
		state: { selectedTrajectory, semesters, selectedDirection },
	} = useConstructorContext();
	const { data, isFetching, isLoading, refetch } = useProfessionalTrajectoryByIdQuery(selectedTrajectory);
	const {} = useEducationalModules(selectedDirection, undefined, selectedTrajectory);

	useEffect(() => {
		refetch();
	}, [selectedTrajectory]);

	return (
		<Loader loading={isLoading || isFetching} size="large">
			<Space direction="vertical" size={100}>
				{data && <TrajectoryInfo {...data} />}
				{!!semesters.length && <AcademicPlan />}
			</Space>
		</Loader>
	);
};
