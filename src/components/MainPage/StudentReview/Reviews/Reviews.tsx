import React, { useState } from 'react';
import { ReviewCard, ReviewCardProps } from './ReviewCard/ReviewCard';
import { Carousel } from 'react-responsive-carousel';
import { Pagination, Space } from 'antd';
import s from './Reviews.module.scss';

type ReviewsProps = {
	reviews: ReviewCardProps[];
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
			<Pagination
				className={s.pagination}
				size="small"
				total={Math.ceil(reviews.length / 2)}
				pageSize={1}
				onChange={(page) => setCurrentPage(page - 1)}
			/>
		</>
	);
};
