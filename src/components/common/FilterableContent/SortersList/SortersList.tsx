import React from 'react';
import { reverseSortDirection, Sorter, sortIcons } from '../types';
import { Button, Space } from 'antd';
import s from './SortersList.module.scss';

type SortersListProps = {
	sorters: Sorter[];
	className?: string;
};

export const SortersList: React.FC<SortersListProps> = ({ sorters, className }) => {
	return (
		<Space direction="horizontal" size="middle" className={`${s.sortersList} ${className ?? ''}`}>
			{sorters.map((sorter) => {
				const Icon = sortIcons[sorter.direction];
				return (
					<Button
						type="link"
						className={s.sortersList__sorterButton}
						onClick={() => sorter.onChange(reverseSortDirection[sorter.direction])}
						key={sorter.key}
					>
						<span className={s.sorterButton__text}>{sorter.titles[sorter.direction]}</span>
						<Icon style={{ fontSize: 20, color: '#1890FF' }} />
					</Button>
				);
			})}
		</Space>
	);
};
