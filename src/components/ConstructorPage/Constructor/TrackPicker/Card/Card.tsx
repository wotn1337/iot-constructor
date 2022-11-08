import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.scss';
import { CourseType } from '../TrackPicker';
import { Badge, Tag } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

type ColumnProps = {
	course: CourseType;
	courseId: number;
};

export const Card: React.FC<ColumnProps> = ({ course, courseId }) => {
	const [badgeVisible, setBadgeVisible] = useState<boolean>(false);

	return (
		<Draggable draggableId={course.id} key={courseId} index={courseId}>
			{() => {
				return (
					<div onMouseEnter={() => setBadgeVisible(true)} onMouseLeave={() => setBadgeVisible(false)}>
						<Badge.Ribbon
							color="#FA8C16"
							text={<QuestionOutlined />}
							style={{ visibility: badgeVisible ? 'visible' : 'hidden', cursor: 'pointer' }}
						>
							<div className={'card'}>
								<p>{course.name}</p>
								<div className="card__tags">
									{course.tags?.map((tag) => (
										<Tag className="card__tags__tag" color="blue" key={tag.id}>
											{tag.name}
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
