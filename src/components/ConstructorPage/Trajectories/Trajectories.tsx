import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'antd';
import { useProfessionalTrajectoriesQuery } from '../../../hooks/useProfessionalTrajectoriesQuery';
import { Loader } from '../../common/Loader/Loader';
import { TrajectoryCard } from './TrajectoryCard/TrajectoryCard';
import { ServerErrorContext } from '../../../providers/ServerErrorProvider';

type TrajectoriesProps = {};

export const Trajectories: React.FC<TrajectoriesProps> = () => {
	const { data, isLoading, isFetching, error } = useProfessionalTrajectoriesQuery();
	const { setError } = useContext(ServerErrorContext);

	useEffect(() => {
		if (error) {
			setError(error);
		}
	}, [error]);

	return (
		<Loader loading={isLoading || isFetching} size="large">
			<Row gutter={[20, 16]} align="middle">
				{data?.map((track) => (
					<Col key={track.id} span={24} lg={8} md={12}>
						<TrajectoryCard {...track} />
					</Col>
				))}
			</Row>
		</Loader>
	);
};
