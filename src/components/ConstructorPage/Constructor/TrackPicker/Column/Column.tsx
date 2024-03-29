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
		? 'В этом семестре нет курсов по выбору, попробуй перейти в другой'
		: 'Необходимо выбрать дисциплину из выпадающего списка и перетащить ее в колонку «Мои дисциплины»';

	return (
		<div key={column.id}>
			<div className="column">
				<div className="column__head">
					<p className={column.id === 2 ? 'title__blue' : 'title'}>{column.name}</p>
					{column.id === 1 && (
						<Tooltip
							className="column__head__icon"
							placement="topRight"
							color="#FA8C16"
							title={tooltipTitle}
						>
							<QuestionCircleOutlined />
						</Tooltip>
					)}
				</div>
				<div className={`column__content ${isColumnEmpty ? 'emptyColumn' : ''}`}>
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
