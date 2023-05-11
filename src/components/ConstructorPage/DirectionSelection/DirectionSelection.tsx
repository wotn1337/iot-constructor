import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'antd';
import { DirectionCard } from './DirectionCard/DirectionCard';
import { setSelectedDirection, useConstructorContext } from '../Context';
import { useEducationalProgramsQuery } from '../../../hooks';
import { Loader } from '../../common/Loader/Loader';
import { reachGoal } from '../../../common/utils';
import s from './DirectionSelection.module.scss';
import { ServerErrorContext } from '../../../providers/ServerErrorProvider';
import { StatisticContext } from '../../../providers/StatisticProvider';
import { StatisticKey } from '../../../common/types';

type ChoiceInstituteProps = {};

export const DirectionSelection: React.FC<ChoiceInstituteProps> = () => {
	const { data, isLoading, isFetching, error } = useEducationalProgramsQuery();
	const {
		state: { selectedDirection },
		dispatch,
	} = useConstructorContext();
	const { setError } = useContext(ServerErrorContext);
	const { addEvent } = useContext(StatisticContext);

	useEffect(() => {
		if (error) {
			setError(error);
		}
	}, [error]);

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
								addEvent(dir.id, StatisticKey.EP, 'click_in_constructor');
							}}
						/>
					</Col>
				))}
			</Row>
		</Loader>
	);
};
