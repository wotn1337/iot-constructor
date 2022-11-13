import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.scss';
import { Badge, Tag } from 'antd';
import { CloseOutlined, QuestionOutlined } from '@ant-design/icons';
import { Discipline } from '../../../../../common/types';

type ColumnProps = {
	course: Discipline;
	index: number;
	isDragDisabled: boolean;
	isSelected: boolean;
};

export const Card: React.FC<ColumnProps> = ({ course, index, isDragDisabled, isSelected }) => {
	const [badgeVisible, setBadgeVisible] = useState<boolean>(false);

	return (
		<Draggable draggableId={course.id.toString()} key={index} index={index} isDragDisabled={isDragDisabled}>
			{(provided) => {
				return (
					<div
						onMouseEnter={() => setBadgeVisible(!isDragDisabled)}
						onMouseLeave={() => setBadgeVisible(false)}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						className="dnd-wrapper"
					>
						<Badge.Ribbon
							color={isSelected ? '#FF4D4F' : '#FA8C16'}
							text={isSelected ? <CloseOutlined /> : <QuestionOutlined />}
							style={{ visibility: badgeVisible ? 'visible' : 'hidden', cursor: 'pointer' }}
						>
							<div className={`card ${isSelected ? 'selected' : ''}`}>
								<p>{course.title}</p>
								<div className="card__tags">
									{course.professional_trajectories?.map((tag) => (
										<Tag
											className="card__tags__tag"
											color={isSelected ? 'success' : 'blue'}
											key={tag.id}
										>
											{tag.slug}
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
