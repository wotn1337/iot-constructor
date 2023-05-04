import React from 'react';
import { Input, Popover } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { Filter, Sorter } from '../types';
import './MobileSearch.scss';
import { FilterOverlay } from './FilterOverlay/FilterOverlay';

const { Search } = Input;

type MobileSearchProps = {
	filtersState: Filter[];
	sortersState?: {
		sorters: Sorter[];
		selectedSorter: Sorter;
		onChange: (index: number) => void;
	};
	searchTitleState?: {
		title: string | undefined;
		setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
	};
	onClearSelection: React.MouseEventHandler<HTMLElement>;
};

export const MobileSearch: React.FC<MobileSearchProps> = ({
	searchTitleState,
	filtersState,
	sortersState,
	onClearSelection,
}) => {
	return (
		<Search
			placeholder="Введите профессию"
			size="large"
			suffix={
				<Popover
					trigger="click"
					placement="bottomRight"
					content={
						<FilterOverlay
							filtersState={filtersState}
							sortersState={sortersState}
							onClearSelection={onClearSelection}
						/>
					}
					showArrow={false}
				>
					<FilterOutlined className="filter-icon" />
				</Popover>
			}
			className="mobile-professions-search"
			onSearch={searchTitleState?.setTitle}
		/>
	);
};
