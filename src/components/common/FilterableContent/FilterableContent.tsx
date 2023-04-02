import React from 'react';
import { Filter, Sorter } from './types';
import { Col, Row, Spin } from 'antd';
import s from './FilterableContent.module.scss';
import { FiltersList } from './FiltersList/FiltersList';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { SortersList } from './SortersList/SortersList';

type FilterableContentProps = {
	title: string;
	filtersState: Filter[];
	sortersState?: Sorter[];
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
			<h3 className={s.title} style={{ marginBottom: sortersState ? 10 : 48 }}>
				{title}
			</h3>
			{sortersState && (
				<div className={s.sortersWrapper}>
					<SortersList sorters={sortersState} className={s.sorters} />
				</div>
			)}
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
					<Spin spinning={fetchMoreState?.loading}>
						<div>{content}</div>
					</Spin>
					<Loader
						loading={fetchMoreState?.loading && !fetchMoreState?.hideFetchMoreButton}
						style={{ marginTop: 32 }}
					>
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
