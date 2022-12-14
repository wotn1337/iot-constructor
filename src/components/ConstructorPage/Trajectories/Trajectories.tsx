import React from 'react';
import { Col, Row } from 'antd';
import { useProfessionalTrajectoriesQuery } from '../../../hooks/useProfessionalTrajectoriesQuery';
import { Loader } from '../../common/Loader/Loader';
import { TrajectoryCard } from './TrajectoryCard/TrajectoryCard';

type TrajectoriesProps = {};

export const Trajectories: React.FC<TrajectoriesProps> = ({ ...props }) => {
	const { data, isLoading, isFetching } = useProfessionalTrajectoriesQuery();
	return (
		<Loader loading={isLoading || isFetching}>
			<Row gutter={[20, 16]} align="middle">
				{data?.map((track) => (
					<Col span={8} key={track.id}>
						<TrajectoryCard {...track} />
					</Col>
				))}
			</Row>
		</Loader>
	);
};
