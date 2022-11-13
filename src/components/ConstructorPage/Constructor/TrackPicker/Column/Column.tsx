import React from 'react';
import s from './Column.module.scss';
import { Col, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Module } from '../Module/Module';
import { ColumnType } from '../types';

type ColumnProps = {
	column: ColumnType;
};

export const Column: React.FC<ColumnProps> = ({ column }) => {
	return (
		<Col key={column.id}>
			<div className={s.card}>
				<div className={s.card__head}>
					<p className={s.card__head__title}>{column.name}</p>
					{column.name === 'Выберите курсы' && (
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
						<Module columnName={column.name} module={item} key={item.id} />
					))}
				</div>
			</div>
		</Col>
	);
};
