import React from 'react';
import { ReviewCard } from './ReviewCard/ReviewCard';
import { Carousel } from 'react-responsive-carousel';
import { Pagination, Space } from 'antd';
import s from './Reviews.module.scss';
import { setStudentReviewsPage, useMainPageContext } from '../../Context';
import { useStudentReviewsQuery } from '../../../../hooks/useStudentReviewsQuery';
import { Loader } from '../../../common/Loader/Loader';

type ReviewsProps = {};

export const Reviews: React.FC<ReviewsProps> = () => {
	const {
		state: { studentReviewsPage },
		dispatch,
	} = useMainPageContext();
	const { data, isLoading, isFetching } = useStudentReviewsQuery(studentReviewsPage);

	return (
		<>
			<Carousel
				centerMode={true}
				centerSlidePercentage={100}
				showArrows={false}
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				className={s.carousel}
				selectedItem={studentReviewsPage - 1}
			>
				{[
					<Loader loading={isLoading || isFetching} style={{ height: 327 }} size="large" key="carousel">
						<Space size={20}>
							{data?.reviews.map((r) => (
								<ReviewCard {...r} key={r.id} />
							))}
						</Space>
					</Loader>,
				]}
			</Carousel>
			{data && data.meta.last_page > 2 && (
				<Pagination
					className={s.pagination}
					size="small"
					total={data?.meta.last_page}
					pageSize={1}
					onChange={(page) => dispatch(setStudentReviewsPage(page))}
				/>
			)}
		</>
	);
};
