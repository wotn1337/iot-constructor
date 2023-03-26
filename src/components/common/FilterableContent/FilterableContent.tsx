import React from 'react';
import { Filter, Sorter } from './types';
import { Id, SortDirection } from '../../../common/types';
import { Col, Row } from 'antd';
import s from './FilterableContent.module.scss';
import { FiltersList } from './FiltersList/FiltersList';

type FilterableContentProps = {
	title: string;
	filtersState: Filter[];
	sortersState: {
		sorters: Sorter[];
		directions: Record<Id, SortDirection>;
		onChange: (id: Id) => void;
	};
	content: React.ReactNode;
};

export const FilterableContent: React.FC<FilterableContentProps> = ({ title, filtersState, content, sortersState }) => {
	return (
		<section className={s.filterableContent}>
			<h3 className={s.title}>{title}</h3>
			<Row gutter={20}>
				<Col span={6}>
					{filtersState.map((filter, index) => (
						<FiltersList filter={filter} key={filter.key} divider={index !== filtersState.length - 1} />
					))}
				</Col>
				<Col span={18}>{content}</Col>
			</Row>
		</section>
	);
};
