import React from 'react';
import { Col, Row } from 'antd';
import { Document, LightBlue } from '../../../images';
import { TypeCard } from './TypeCard/TypeCard';
import s from './TypeSelection.module.scss';
import { setSelectedType, useConstructorContext } from '../Context';
import { STEP_TYPE } from '../types';
import { reachGoal } from '../../../common/utils';

const CONSTRUCTOR_TYPES = [
	{
		id: 1,
		icon: LightBlue,
		title: 'Попробовать создать свою траекторию',
		type: STEP_TYPE.CONSTRUCTOR,
		onClick: () => reachGoal('makeTrajectory'),
	},
	{
		id: 2,
		icon: Document,
		title: 'Посмотреть готовые траектории',
		type: STEP_TYPE.TRAJECTORIES,
		onClick: () => reachGoal('showTrajectories'),
	},
];

type TypeSelectionProps = {};

export const TypeSelection: React.FC<TypeSelectionProps> = () => {
	const {
		state: { selectedType },
		dispatch,
	} = useConstructorContext();

	return (
		<Row gutter={[20, 20]} className={s.wrapper} justify="center">
			{CONSTRUCTOR_TYPES.map((type) => (
				<Col key={type.id} span={24} md={12}>
					<TypeCard
						{...type}
						selected={selectedType === type.type}
						onClick={() => {
							dispatch(setSelectedType(type.type));
							type.onClick?.();
						}}
					/>
				</Col>
			))}
		</Row>
	);
};
