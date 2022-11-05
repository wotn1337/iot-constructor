import React from 'react';
import { Col, Row } from 'antd';
import { LightBlue, Document } from '../../../images';
import { TypeCard } from './TypeCard/TypeCard';
import { Id } from '../../../common/types';
import s from './TypeSelection.module.scss';

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

type TypeSelectionProps = {
	selectedType: Id | undefined;
	setSelected: React.Dispatch<React.SetStateAction<Id | undefined>>;
};

export const TypeSelection: React.FC<TypeSelectionProps> = ({ selectedType, setSelected }) => {
	return (
		<Row gutter={20} className={s.wrapper}>
			{CONSTRUCTOR_TYPES.map((type) => (
				<Col key={type.id} span={12}>
					<TypeCard {...type} selected={selectedType === type.id} onClick={() => setSelected(type.id)} />
				</Col>
			))}
		</Row>
	);
};
