import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import s from './Column.module.scss';
import { Col, Tooltip } from 'antd';
import { ColumnType } from '../TrackPicker';
import { Card } from '../Card/Card';
import { QuestionCircleOutlined } from '@ant-design/icons';

type ColumnProps = {
	columnId: string;
	column: ColumnType;
};

export const Column: React.FC<ColumnProps> = ({ column, columnId }) => {
	return (
		<Col key={columnId}>
			<Droppable droppableId={columnId} key={columnId}>
				{() => {
					return (
						<div className={s.card}>
							<div className={s.card__head}>
								<p className={s.card__head__title}>{column.name}</p>
								{column.extra && (
									<Tooltip
										className={s.card__head__icon}
										placement="topRight"
										color="#FA8C16"
										title="Необходимо выбрать один курс из каждого блока и перетащить его в Мои курсы"
									>
										<QuestionCircleOutlined />
									</Tooltip>
								)}
							</div>
							<div className={s.card__content}>
								{column.items.map((item, index) => (
									<Card course={item} courseId={index} key={index} />
								))}
							</div>
						</div>
					);
				}}
			</Droppable>
		</Col>
	);
};
