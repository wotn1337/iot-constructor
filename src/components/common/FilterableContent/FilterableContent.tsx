import React from 'react';
import { Filter, Sorter } from './types';
import { Id, SortDirection } from '../../../common/types';
import { Col, Row } from 'antd';
import s from './FilterableContent.module.scss';
import { FiltersList } from './FiltersList/FiltersList';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';

type FilterableContentProps = {
	title: string;
	filtersState: Filter[];
	sortersState: {
		sorters: Sorter[];
		directions: Record<Id, SortDirection>;
		onChange: (id: Id) => void;
	};
	content: React.ReactNode;
	onCLearSelection: React.MouseEventHandler<HTMLElement>;
	fetchMoreState?: {
		loading?: boolean;
		onFetchMore?: () => void;
		hideFetchMoreButton?: boolean;
	};
};

export const FilterableContent: React.FC<FilterableContentProps> = ({
	title,
	filtersState,
	content,
	sortersState,
	onCLearSelection,
	fetchMoreState,
}) => {
	return (
		<section className={s.filterableContent}>
			<h3 className={s.title}>{title}</h3>
			<Row gutter={20}>
				<Col span={6}>
					{filtersState.map((filter, index) => (
						<FiltersList filter={filter} key={filter.key} divider={index !== filtersState.length - 1} />
					))}
					<Button type="default" classname={s.clearButton} onClick={onCLearSelection}>
						Очистить
					</Button>
				</Col>
				<Col span={18}>
					<div>{content}</div>
					<Loader loading={fetchMoreState?.loading} style={{ marginTop: 32 }}>
						{!fetchMoreState?.hideFetchMoreButton && (
							<Button type="default" classname={s.fetchMoreButton} onClick={fetchMoreState?.onFetchMore}>
								Показать ещё
							</Button>
						)}
					</Loader>
				</Col>
			</Row>
		</section>
	);
};
