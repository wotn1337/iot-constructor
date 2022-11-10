import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.scss';
import { Badge, Tag } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import { Discipline } from '../../../../../common/types';

type ColumnProps = {
	course: Discipline;
};

export const Card: React.FC<ColumnProps> = ({ course }) => {
	const [badgeVisible, setBadgeVisible] = useState<boolean>(false);

	return (
		<Draggable draggableId={course.id.toString()} index={Number(course.id)}>
			{(provided) => {
				return (
					<div
						onMouseEnter={() => setBadgeVisible(true)}
						onMouseLeave={() => setBadgeVisible(false)}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<Badge.Ribbon
							color="#FA8C16"
							text={<QuestionOutlined />}
							style={{ visibility: badgeVisible ? 'visible' : 'hidden', cursor: 'pointer' }}
						>
							<div className={'card'}>
								<p>{course.title}</p>
								<div className="card__tags">
									{course.professional_trajectories?.map((tag) => (
										<Tag className="card__tags__tag" color="blue" key={tag.id}>
											{tag.title}
										</Tag>
									))}
								</div>
							</div>
						</Badge.Ribbon>
					</div>
				);
			}}
		</Draggable>
	);
};
