import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.scss';
import { Tag, Tooltip } from 'antd';
import { CloseOutlined, QuestionOutlined } from '@ant-design/icons';
import { Discipline } from '../../../../../common/types';
import { setColumns, setSemesterColumns, setSemesterFinish, useConstructorContext } from '../../../Context';
import { addTask, deleteTask } from '../../utils';

type ColumnProps = {
	course: Discipline;
	index: number;
	isDragDisabled: boolean;
	isSelected: boolean;
	droppableId: string;
};

export const Card: React.FC<ColumnProps> = ({ course, index, droppableId, isDragDisabled, isSelected }) => {
	const {
		state: { columns, currentSemester },
		dispatch,
	} = useConstructorContext();
	const [badgeVisible, setBadgeVisible] = useState<boolean>(false);
	return (
		<Draggable draggableId={course.id.toString()} key={index} index={index} isDragDisabled={isDragDisabled}>
			{(provided) => {
				return (
					<div
						className="dnd-wrapper"
						onMouseEnter={() => setBadgeVisible(true)}
						onMouseLeave={() => setBadgeVisible(false)}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<div className={`card ${isSelected ? 'selected' : ''}`}>
							<div className="card__header">
								<p>{course.title}</p>
								<div className="card__header__buttons" style={{ opacity: badgeVisible ? 100 : 0 }}>
									<button className="button question">
										<QuestionOutlined />
									</button>
									{isSelected && !isDragDisabled && (
										<button className="button close">
											<CloseOutlined
												onClick={() => {
													const source = {
														droppableId: droppableId,
														index: index,
													};
													const destination = {
														droppableId: droppableId.split('_')[1],
														index: 0,
													};
													let data = deleteTask(columns, source.droppableId, source.index);
													let newData = data?.newColumns;
													let removed = data?.removed;

													if (newData && removed) {
														newData =
															addTask(
																newData,
																destination?.droppableId,
																destination?.index,
																removed
															) ?? {};
														dispatch(setColumns(newData));
														dispatch(
															setSemesterColumns({
																id: currentSemester,
																columns: newData,
															})
														);
														if (
															newData['2'].items
																.filter((module) => module.is_spec)
																.every(
																	(module) =>
																		module.choice_limit ===
																		module.disciplines.length
																)
														) {
															dispatch(
																setSemesterFinish({
																	id: currentSemester,
																	isFinished: true,
																})
															);
														} else
															dispatch(
																setSemesterFinish({
																	id: currentSemester,
																	isFinished: false,
																})
															);
													}
												}}
											/>
										</button>
									)}
								</div>
							</div>
							<div className="card__tags">
								{course.professional_trajectories?.map((tag) => (
									<Tooltip title={tag.title}>
										<Tag
											className="card__tags__tag"
											style={{
												backgroundColor: `white`,
												border: `1px solid ${tag.color}`,
											}}
											key={tag.id}
										>
											{tag.slug}
										</Tag>
									</Tooltip>
								))}
							</div>
						</div>
					</div>
				);
			}}
		</Draggable>
	);
};
