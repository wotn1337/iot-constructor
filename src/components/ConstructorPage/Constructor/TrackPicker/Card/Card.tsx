import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.scss';
import { Badge, Tag } from 'antd';
import { CloseOutlined, QuestionOutlined } from '@ant-design/icons';
import { Discipline } from '../../../../../common/types';
import { setColumns, useConstructorContext } from '../../../Context';

type ColumnProps = {
	course: Discipline;
	index: number;
	moduleTitle: string;
	columnName: string;
	isDragDisabled: boolean;
	isSelected: boolean;
};

export const Card: React.FC<ColumnProps> = ({ course, index, moduleTitle, isDragDisabled, isSelected }) => {
	const {
		state: { columns },
		dispatch,
	} = useConstructorContext();
	const [badgeVisible, setBadgeVisible] = useState<boolean>(false);
	return (
		<Draggable draggableId={course.id.toString()} key={index} index={index} isDragDisabled={isDragDisabled}>
			{(provided) => {
				return (
					<div
						className="dnd-wrapper"
						onMouseEnter={() => setBadgeVisible(!isDragDisabled)}
						onMouseLeave={() => setBadgeVisible(false)}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<Badge.Ribbon
							color={isSelected ? '#FF4D4F' : '#FA8C16'}
							text={
								isSelected ? (
									<button
										onClick={() => {
											dispatch(
												setColumns([
													{
														...columns[0],
														items: columns[0].items.map((module) => {
															return module.title === moduleTitle
																? {
																		...module,
																		disciplines: [...module.disciplines, course],
																  }
																: { ...module };
														}),
													},
													{
														...columns[1],
														items: columns[1].items.map((module) => {
															return module.title === moduleTitle
																? {
																		...module,
																		disciplines: module.disciplines.filter(
																			(disc) => disc.id !== course.id
																		),
																  }
																: { ...module };
														}),
													},
												])
											);
										}}
										style={{
											border: 'none',
											backgroundColor: 'transparent',
											cursor: 'pointer',
										}}
									>
										<CloseOutlined />
									</button>
								) : (
									<QuestionOutlined />
								)
							}
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
