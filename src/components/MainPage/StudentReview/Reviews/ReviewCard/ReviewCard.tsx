import { Avatar, Badge, Card, Space, Typography } from 'antd';
import React from 'react';
import './ReviewCard.scss';
import type { StudentReview } from '../../../../../common/types';
import { getBadge } from '../../utils';
import { getAvatarPlaceholder } from '../../../../../common/utils';

const { Text, Paragraph } = Typography;

export type ReviewCardProps = StudentReview;

export const ReviewCard: React.FC<ReviewCardProps> = ({
	author,
	text,
	photo,
	educational_direction,
	course,
	year_of_issue,
}) => {
	const badge = getBadge(year_of_issue, educational_direction, course);

	return (
		<Badge.Ribbon text={badge} color="#FA8C16">
			<Card className="card">
				<Avatar
					size={90}
					icon={<img src={getAvatarPlaceholder()} alt="" />}
					src={photo}
					className="card__avatar"
				/>
				<Space className="card__info" size={0} direction="vertical">
					<Text className="card__name">{author}</Text>
					<Text className="card__direction">{educational_direction}</Text>
				</Space>
				<Paragraph className="card__review">{text}</Paragraph>
			</Card>
		</Badge.Ribbon>
	);
};
