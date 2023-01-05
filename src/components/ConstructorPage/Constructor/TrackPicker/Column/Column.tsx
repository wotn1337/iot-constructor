import React from 'react';
import './Column.scss';
import { Empty, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Module } from '../Module/Module';
import { Column as ColumnType } from '../../../Context/types';
import { Empty as EmptyImage } from './../../../../../images';

type ColumnProps = {
	column: ColumnType;
};

export const Column: React.FC<ColumnProps> = ({ column }) => {
	const isColumnEmpty = column.items.length === 0;
	const tooltipTitle = isColumnEmpty
		? 'В этом семестре нет курсов по выбору, перейдите к следующему'
		: 'Необходимо выбрать один курс из каждого блока и перетащить его в Мои дисциплины';

	return (
		<div key={column.id}>
			<div className="card">
				<div className="card__head">
					<p className={column.id === 2 ? 'title__blue' : 'title'}>{column.name}</p>
					{column.id === 1 && (
						<Tooltip className="card__head__icon" placement="topRight" color="#FA8C16" title={tooltipTitle}>
							<QuestionCircleOutlined />
						</Tooltip>
					)}
				</div>
				<div className={`card__content ${isColumnEmpty ? 'emptyColumn' : ''}`}>
					{isColumnEmpty && (
						<Empty image={EmptyImage} description="В этом семестре нет дисциплин по выбору" />
					)}
					{column.items.map((item) => (
						<Module column={column} module={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
};
