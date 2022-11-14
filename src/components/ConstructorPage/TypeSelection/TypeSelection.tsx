import React from 'react';
import { Col, Row } from 'antd';
import { Document, LightBlue } from '../../../images';
import { TypeCard } from './TypeCard/TypeCard';
import s from './TypeSelection.module.scss';
import { setSelectedType, useConstructorContext } from '../Context';

const CONSTRUCTOR_TYPES = [
	{
		id: 1,
		icon: LightBlue,
		title: 'Создать траекторию с нуля',
	},
	{
		id: 2,
		icon: Document,
		title: 'Посмотреть готовые траектории',
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
						selected={selectedType === type.id}
						onClick={() => dispatch(setSelectedType(type.id))}
					/>
				</Col>
			))}
		</Row>
	);
};
