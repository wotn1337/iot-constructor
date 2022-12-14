import React, { useEffect } from 'react';
import { useProfessionalTrajectoryByIdQuery } from '../../../hooks/useProfessionalTrajectoryByIdQuery';
import { TrajectoryInfo } from './TrajectoryInfo/TrajectoryInfo';
import { Loader } from '../../common/Loader/Loader';
import { useConstructorContext } from '../Context';
import { AcademicPlan } from '../AcademicPlan/AcademicPlan';
import { Space } from 'antd';

type TrajectoryAnalysisProps = {};

export const TrajectoryAnalysis: React.FC<TrajectoryAnalysisProps> = () => {
	const {
		state: { selectedTrajectory, semesters },
	} = useConstructorContext();
	const { data, isFetching, isLoading, refetch } = useProfessionalTrajectoryByIdQuery(selectedTrajectory);

	useEffect(() => {
		refetch();
	}, [selectedTrajectory]);

	return (
		<Loader loading={isLoading || isFetching} size="large">
			<Space direction="vertical" size={100}>
				{/*<GreatChoice />*/}
				{data && <TrajectoryInfo {...data} />}
				{!!semesters.length && <AcademicPlan />}
			</Space>
		</Loader>
	);
};
