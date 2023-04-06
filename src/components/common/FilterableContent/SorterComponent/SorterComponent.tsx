import React from 'react';
import { Sorter, sortIcons } from '../types';
import { Button, Dropdown } from 'antd';
import s from './SorterComponent.module.scss';

type SortersListProps = {
	sorters: Sorter[];
	selectedSorter: Sorter;
	onChange: (index: number) => void;
};

export const SorterComponent: React.FC<SortersListProps> = ({ sorters, selectedSorter, onChange }) => {
	const Icon = sortIcons[selectedSorter.direction];

	return (
		<Dropdown
			menu={{
				items: sorters.map((sorter) => ({ key: sorter.index, label: sorter.label })),
				onClick: ({ key }) => onChange(+key),
			}}
			trigger={['click']}
		>
			<Button type="link" className={s.sortersList__sorterButton}>
				<span className={s.sorterButton__text}>{selectedSorter.label}</span>
				<Icon style={{ fontSize: 20, color: '#1890FF' }} />
			</Button>
		</Dropdown>
	);
};
