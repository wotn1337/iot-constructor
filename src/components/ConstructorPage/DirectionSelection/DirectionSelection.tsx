import React from 'react';
import { Col, Row } from 'antd';
import { DirectionCard } from './DirectionCard/DirectionCard';
import { setSelectedDirection, useConstructorContext } from '../Context';
import { useEducationalDirectionsQuery } from '../../../hooks/useEducationalDirections';
import { Loader } from '../../common/Loader/Loader';
import { reachGoal } from '../../../common/utils';
import s from './DirectionSelection.module.scss';

type ChoiceInstituteProps = {};

export const DirectionSelection: React.FC<ChoiceInstituteProps> = () => {
	const { data, isLoading, isFetching } = useEducationalDirectionsQuery();
	const {
		state: { selectedDirection },
		dispatch,
	} = useConstructorContext();
	return (
		<Loader loading={isLoading || isFetching}>
			<Row gutter={[20, 32]} className={s.directionsGrid}>
				{data?.map((dir) => (
					<Col key={`dirCard-${dir.id}`} span={24} md={12} className={s.cardCol}>
						<DirectionCard
							{...dir}
							selected={selectedDirection === dir.id}
							onClick={() => {
								dispatch(setSelectedDirection(dir.id));
								reachGoal('direction');
							}}
						/>
					</Col>
				))}
			</Row>
		</Loader>
	);
};
