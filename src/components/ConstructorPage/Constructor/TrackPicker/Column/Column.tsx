import React from 'react';
import s from './Column.module.scss';
import { Col, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Module } from '../Module/Module';
import { Column as ColumnType } from '../../../Context/types';

type ColumnProps = {
	column: ColumnType;
};

export const Column: React.FC<ColumnProps> = ({ column }) => {
	return (
		<Col key={column.id}>
			<div className={s.card}>
				<div className={s.card__head}>
					<p className={column.id === 2 ? s.title__blue : s.title}>{column.name}</p>
					{column.id === 1 && (
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
					{column.items.map((item) => (
						<Module column={column} module={item} key={item.id} />
					))}
				</div>
			</div>
		</Col>
	);
};
