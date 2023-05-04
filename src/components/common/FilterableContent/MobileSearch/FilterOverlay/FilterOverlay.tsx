import React from 'react';
import { FiltersList } from '../../FiltersList/FiltersList';
import { Filter, Sorter } from '../../types';
import './FilterOverlay.scss';
import { Button } from '../../../Button/Button';
import s from '../../FilterableContent.module.scss';
import { Divider, Radio, Space } from 'antd';

type FilterOverlayProps = {
	filtersState: Filter[];
	sortersState?: {
		sorters: Sorter[];
		selectedSorter: Sorter;
		onChange: (index: number) => void;
	};
	onClearSelection: React.MouseEventHandler<HTMLElement>;
};

export const FilterOverlay: React.FC<FilterOverlayProps> = ({ filtersState, sortersState, onClearSelection }) => {
	return (
		<div className="filter-overlay">
			{sortersState && (
				<div className="filter-overlay__sorters">
					<span className="sorters__title">Сортировать по</span>
					<Space direction="vertical" size={10} className="filters-list__items">
						{sortersState.sorters.map((item) => (
							<Radio
								onChange={() => sortersState.onChange(item.index)}
								key={item.index}
								checked={item.index === sortersState.selectedSorter.index}
								className="sorter__radio"
							>
								<span>{item.label}</span>
							</Radio>
						))}
					</Space>
					<Divider className="sorters__divider" />
				</div>
			)}
			{filtersState.map((filter, index) => (
				<FiltersList
					filter={filter}
					key={filter.key}
					divider={index !== filtersState.length - 1}
					className="filter-overlay__filters-list"
				/>
			))}
			<Button
				type="default"
				classname={s.clearButton}
				onClick={onClearSelection}
				style={{ margin: '0 auto', display: 'block' }}
			>
				Очистить
			</Button>
		</div>
	);
};
