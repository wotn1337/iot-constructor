import { Avatar, Badge, Card, Typography } from 'antd';
import React from 'react';
import './ReviewCard.scss';
import { UserOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

export type ReviewCardProps = {
	id: number;
	avatar: string | null;
	name: string;
	review: string;
	badge: string;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, name, badge, avatar }) => {
	return (
		<Badge.Ribbon text={badge} color="#FA8C16">
			<Card className="card">
				<Avatar size={90} icon={<UserOutlined />} src={avatar} className="card__avatar" />
				<Text className="card__name">{name}</Text>
				<Paragraph className="card__review">{review}</Paragraph>
			</Card>
		</Badge.Ribbon>
	);
};
