import React from 'react';
import { Filter, Sorter } from './types';
import { Col, Empty, Row, Spin } from 'antd';
import s from './FilterableContent.module.scss';
import { FiltersList } from './FiltersList/FiltersList';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { SorterComponent } from './SorterComponent/SorterComponent';
import { useMediaQuery } from 'react-responsive';
import { MobileSearch } from './MobileSearch/MobileSearch';

type FilterableContentProps = {
	title: string;
	filtersState: Filter[];
	sortersState?: {
		sorters: Sorter[];
		selectedSorter: Sorter;
		onChange: (index: number) => void;
	};
	content: React.ReactNode;
	itemsCount: number;
	onClearSelection: React.MouseEventHandler<HTMLElement>;
	fetchMoreState?: {
		loading?: boolean;
		onFetchMore?: () => void;
		hideFetchMoreButton?: boolean;
	};
	searchTitleState?: {
		title: string | undefined;
		setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
	};
};

export const FilterableContent: React.FC<FilterableContentProps> = ({
	title,
	filtersState,
	content,
	sortersState,
	onClearSelection,
	fetchMoreState,
	searchTitleState,
	itemsCount,
}) => {
	const isLarge = useMediaQuery({ minWidth: 1024 });

	return (
		<section className={s.filterableContent}>
			<h3 className={s.title} style={{ marginBottom: sortersState && isLarge ? 10 : isLarge ? 48 : 24 }}>
				{title}
			</h3>
			{isLarge ? (
				<>
					{sortersState && (
						<div className={s.sortersWrapper}>
							<SorterComponent {...sortersState} />
						</div>
					)}
				</>
			) : (
				<MobileSearch
					filtersState={filtersState}
					sortersState={sortersState}
					searchTitleState={searchTitleState}
					onClearSelection={onClearSelection}
				/>
			)}
			<Row gutter={20}>
				{isLarge && (
					<Col span={6}>
						{filtersState.map((filter, index) => (
							<FiltersList filter={filter} key={filter.key} divider={index !== filtersState.length - 1} />
						))}
						<Button type="default" classname={s.clearButton} onClick={onClearSelection}>
							Очистить
						</Button>
					</Col>
				)}
				<Col span={isLarge ? 18 : 24}>
					<Spin spinning={fetchMoreState?.loading}>
						{itemsCount > 0 ? (
							<div>{content}</div>
						) : (
							<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено" />
						)}
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
