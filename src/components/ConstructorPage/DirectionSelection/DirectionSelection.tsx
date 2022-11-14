import React from 'react';
import { Col, Row } from 'antd';
import { Direction, DirectionCard } from './DirectionCard/DirectionCard';
import { setSelectedDirection, useConstructorContext } from '../Context';

const DIRECTIONS: Direction[] = [
	{
		id: 1,
		code: '09.03.01',
		name: 'Информатика и вычислительная техника',
		info: [
			{ id: 1, title: 'Срок обучения', value: '4 года' },
			{ id: 1, title: 'Проходной балл в 2022', value: 230 },
			{ id: 1, title: 'Бюджетные места', value: 161 },
		],
	},
	{
		id: 2,
		code: '09.03.03',
		name: 'Прикладная информатика',
		info: [
			{ id: 1, title: 'Срок обучения', value: '4 года' },
			{ id: 1, title: 'Проходной балл в 2022', value: 229 },
			{ id: 1, title: 'Бюджетные места', value: 200 },
		],
	},
	{
		id: 3,
		code: '09.03.04',
		name: 'Программная инженерия',
		info: [
			{ id: 1, title: 'Срок обучения', value: '4 года' },
			{ id: 1, title: 'Проходной балл в 2022', value: 246 },
			{ id: 1, title: 'Бюджетные места', value: 250 },
		],
	},
];

type ChoiceInstituteProps = {};

export const DirectionSelection: React.FC<ChoiceInstituteProps> = () => {
	const {
		state: { selectedDirection },
		dispatch,
	} = useConstructorContext();
	return (
		<Row gutter={[20, 32]}>
			{DIRECTIONS.map((dir) => (
				<Col key={`dirCard-${dir.id}`} span={12}>
					<DirectionCard
						{...dir}
						selected={selectedDirection === dir.id}
						onClick={() => dispatch(setSelectedDirection(dir.id))}
					/>
				</Col>
			))}
		</Row>
	);
};
