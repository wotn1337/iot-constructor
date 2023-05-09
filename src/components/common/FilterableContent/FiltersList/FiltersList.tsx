import React, { useEffect, useMemo, useState } from 'react';
import { Filter } from '../types';
import { Button, Checkbox, Divider, Empty, Input, Space } from 'antd';
import './FiltersList.scss';
import { Id } from '../../../../common/types';
import { Loader } from '../../Loader/Loader';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

type FiltersListProps = {
	filter: Filter;
	divider?: boolean;
	className?: string;
};

export const FiltersList: React.FC<FiltersListProps> = ({ filter, divider, className }) => {
	const { title, selectedIds, onChange, loading } = filter;
	const [expanded, setExpanded] = useState(false);
	const [searchValue, setSearchValue] = useState<string>();

	const items = useMemo(() => {
		if (!expanded) {
			return filter.items.slice(0, 5);
		}

		return searchValue !== undefined
			? filter.items.filter((item) => item.title.toLowerCase().includes(searchValue?.toLowerCase()))
			: [...filter.items];
	}, [expanded, filter.items, searchValue]);

	const handleOnChange = (id: Id) => {
		const newIds = selectedIds.includes(id) ? selectedIds.filter((item) => item !== id) : [...selectedIds, id];
		onChange(newIds);
	};

	useEffect(() => {
		if (!expanded) {
			setSearchValue(undefined);
		}
	}, [expanded]);

	return (
		<>
			<Space direction="vertical" size={16} className={`filters-list ${className}`}>
				<span className="filters-list__title">{title}</span>
				<Loader loading={loading}>
					<Space direction="vertical" size={10} className="filters-list__inner-space">
						{expanded && <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />}
						{items.length ? (
							<Space direction="vertical" size={10} className="filters-list__items">
								{items.map((item) => (
									<Checkbox
										indeterminate={selectedIds.includes(item.id)}
										onChange={() => handleOnChange(item.id)}
										key={item.id}
										className="filters-list__checkbox"
										checked={false}
									>
										<span className="filters-list__item-title">{item.title}</span>
									</Checkbox>
								))}
							</Space>
						) : (
							<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено" />
						)}
						{filter.items.length > 5 && (
							<Button
								type="link"
								className="filters-list__more-button"
								onClick={() => setExpanded(!expanded)}
							>
								{!expanded ? (
									<>
										Еще {filter.items.length - 5} <PlusOutlined />
									</>
								) : (
									<>
										Свернуть <MinusOutlined />
									</>
								)}
							</Button>
						)}
					</Space>
				</Loader>
			</Space>
			{divider && <Divider type="horizontal" className="filters-list__divider" />}
		</>
	);
};
