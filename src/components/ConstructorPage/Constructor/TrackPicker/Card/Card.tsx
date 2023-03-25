import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.scss';
import { CloseOutlined, QuestionOutlined } from '@ant-design/icons';
import { Discipline } from '../../../../../common/types';
import {
	setColumns,
	setDisciplineId,
	setSemesterColumns,
	setSemesterFinish,
	useConstructorContext,
} from '../../../Context';
import { addTask, deleteTask, isDisciplineSelectedBefore } from '../../utils';
import { Tag } from '../../../../common/Tag/Tag';
import { reachGoal } from '../../../../../common/utils';
import { Tooltip } from 'antd';

type ColumnProps = {
	course: Discipline;
	index: number;
	isDragDisabled: boolean;
	isSelected: boolean;
	droppableId: string;
};

export const Card: React.FC<ColumnProps> = ({ course, index, droppableId, isDragDisabled, isSelected }) => {
	const {
		state: { columns, currentSemester, semesters },
		dispatch,
	} = useConstructorContext();
	const [badgeVisible, setBadgeVisible] = useState<boolean>(false);
	const [disableSelect, setDisableSelect] = useState<boolean>(false);

	const onCloseHandle = () => {
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
			newData = addTask(newData, destination?.droppableId, destination?.index, removed) ?? {};
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
					.every((module) => module.choice_limit === module.disciplines.length)
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
	};

	useEffect(() => {
		setDisableSelect(isDisciplineSelectedBefore(semesters, course));
	}, [semesters]);

	return (
		<Draggable
			draggableId={String(course.id)}
			key={index}
			index={index}
			isDragDisabled={isDragDisabled || disableSelect}
		>
			{(provided, snapshot) => {
				return (
					<div
						className="dnd-wrapper"
						onMouseEnter={() => setBadgeVisible(true)}
						onMouseLeave={() => setBadgeVisible(false)}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<Tooltip
							title={
								disableSelect && !isSelected ? 'Эта дисциплина уже была выбрана вами ранее' : undefined
							}
							placement="topLeft"
							color="#FA8C16"
						>
							<div
								className={`card ${isSelected ? 'selected' : ''}`}
								style={snapshot.isDragging ? { borderColor: '#40A9FF' } : {}}
							>
								<div className="card__header">
									<p className={disableSelect ? 'card__header__disabled' : ''}>{course.title}</p>
									<div className="card__header__buttons" style={{ opacity: badgeVisible ? 100 : 0 }}>
										<button
											className="button question"
											onClick={() => {
												dispatch(setDisciplineId(course.id));
												reachGoal('moreAboutDiscipline');
											}}
										>
											<QuestionOutlined />
										</button>
										{isSelected && !isDragDisabled && (
											<button className="button close">
												<CloseOutlined onClick={onCloseHandle} />
											</button>
										)}
									</div>
								</div>
								<div className="card__tags">
									{course.professional_trajectories?.map((tag) => (
										<Tag
											text={tag.abbreviated_name}
											color={tag.color}
											tooltipText={tag.title}
											shouldShowTooltip
											key={tag.id}
										/>
									))}
								</div>
							</div>
						</Tooltip>
					</div>
				);
			}}
		</Draggable>
	);
};
