import React from 'react';
import { Filter } from '../types';
import { Checkbox, Divider, Space } from 'antd';
import './FiltersList.scss';
import { Id } from '../../../../common/types';

type FiltersListProps = {
	filter: Filter;
	divider?: boolean;
};

export const FiltersList: React.FC<FiltersListProps> = ({ filter, divider }) => {
	const { title, items, selectedIds, onChange } = filter;

	const handleOnChange = (id: Id) => {
		const newIds = selectedIds.includes(id) ? selectedIds.filter((item) => item !== id) : [...selectedIds, id];
		onChange(newIds);
	};

	return (
		<>
			<Space direction="vertical" size={16} className="filters-list">
				<span className="filters-list__title">{title}</span>
				<Space direction="vertical" size={10}>
					{items.map((item) => (
						<Checkbox
							indeterminate={selectedIds.includes(item.id)}
							onChange={() => handleOnChange(item.id)}
							key={item.id}
							className="filters-list__checkbox"
						>
							<span className="filters-list__item-title">{item.title}</span>
						</Checkbox>
					))}
				</Space>
			</Space>
			{divider && <Divider type="horizontal" className="filters-list__divider" />}
		</>
	);
};
