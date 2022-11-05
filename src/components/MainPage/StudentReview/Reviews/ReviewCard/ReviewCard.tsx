import { Avatar, Badge, Card, Typography } from 'antd';
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
				<Avatar size={90} icon={<img src={getAvatarPlaceholder()} alt=''/>} src={photo} className="card__avatar" />
				<Text className="card__name">{author}</Text>
				<Paragraph className="card__review">{text}</Paragraph>
			</Card>
		</Badge.Ribbon>
	);
};
