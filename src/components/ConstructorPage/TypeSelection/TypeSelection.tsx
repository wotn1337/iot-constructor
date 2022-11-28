import React from 'react';
import { Col, Row } from 'antd';
import { Document, LightBlue } from '../../../images';
import { TypeCard } from './TypeCard/TypeCard';
import s from './TypeSelection.module.scss';
import { setSelectedType, useConstructorContext } from '../Context';
import { STEP_TYPES } from '../types';

const CONSTRUCTOR_TYPES = [
	{
		id: 1,
		icon: LightBlue,
		title: 'Создать траекторию с нуля',
		type: STEP_TYPES.CONSTRUCTOR,
	},
	{
		id: 2,
		icon: Document,
		title: 'Посмотреть готовые траектории',
		type: STEP_TYPES.TRAJECTORIES,
	},
];

type TypeSelectionProps = {};

export const TypeSelection: React.FC<TypeSelectionProps> = () => {
	const {
		state: { selectedType },
		dispatch,
	} = useConstructorContext();

	return (
		<Row gutter={20} className={s.wrapper}>
			{CONSTRUCTOR_TYPES.map((type) => (
				<Col key={type.id} span={12}>
					<TypeCard
						{...type}
						selected={selectedType === type.type}
						onClick={() => dispatch(setSelectedType(type.type))}
					/>
				</Col>
			))}
		</Row>
	);
};
