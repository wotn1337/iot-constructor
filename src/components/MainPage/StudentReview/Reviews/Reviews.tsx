import React, { useState } from 'react';
import { ReviewCard } from './ReviewCard/ReviewCard';
import { Carousel } from 'react-responsive-carousel';
import { Pagination, Space } from 'antd';
import s from './Reviews.module.scss';
import type { StudentReview } from '../../../../common/types';

type ReviewsProps = {
	reviews: StudentReview[];
};

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const reviewPairs = [];

	for (let i = 0; i < reviews.length; i = i + 2) {
		const hasPair = i <= reviews.length - 2;
		reviewPairs.push(
			<Space size={20} key={`${reviews[i].id}${hasPair ? '_' + reviews[i + 1].id : ''}`}>
				{i < reviews.length && (
					<>
						<ReviewCard {...reviews[i]} />
						{hasPair && <ReviewCard {...reviews[i + 1]} />}
					</>
				)}
			</Space>
		);
	}

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
				selectedItem={currentPage}
			>
				{reviewPairs}
			</Carousel>
			{reviews.length > 2 && (
				<Pagination
					className={s.pagination}
					size="small"
					total={Math.ceil(reviews.length / 2)}
					pageSize={1}
					onChange={(page) => setCurrentPage(page - 1)}
				/>
			)}
		</>
	);
};
