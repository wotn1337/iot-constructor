import React, { useEffect, useState } from 'react';
import { Discipline } from '../../../../../common/types';
import { Tag } from '../../../../common/Tag/Tag';
import './MobileCard.scss';
import { Button } from '../../../../common/Button/Button';
import { CloseOutlined, QuestionOutlined } from '@ant-design/icons';
import {
	setColumns,
	setDisciplineId,
	setSemesterColumns,
	setSemesterFinish,
	useConstructorContext,
} from '../../../Context';
import { addTask, chooseTask, deleteTask } from '../../utils';
import { IColumns } from '../../../Context/types';

type MobileCardProps = {
	course: Discipline;
	moduleId: string;
	index: number;
};

export const MobileCard: React.FC<MobileCardProps> = ({ course, moduleId, index }) => {
	const {
		state: { columns, currentSemester },
		dispatch,
	} = useConstructorContext();

	const [isSelected, setIsSelected] = useState<boolean | undefined>(undefined);
	const [isDisabled, setIsDisabled] = useState<boolean | undefined>(
		columns['2'].items
			?.find((item) => item.id === `module_${moduleId}`)
			?.disciplines?.some((item) => item.id === course.id)
	);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		const module = columns['2'].items?.find((item) => item.id === `module_${moduleId}`);
		if (module) {
			setIsSelected(module.disciplines?.some((item) => item.id === course.id));
			setIsDisabled(module.disciplines?.length >= module.choice_limit);
		}
	}, [columns]);

	const onCloseHandle = () => {
		const source = {
			droppableId: `module_${moduleId}`,
			index: index,
		};

		let data = deleteTask(columns, source.droppableId, source.index);
		let newData = data?.newColumns;

		if (newData) {
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

	const onChooseHandle = () => {
		const source = {
			droppableId: moduleId,
			index: index,
		};
		const destination = {
			droppableId: `module_${moduleId}`,
			index: 0,
		};

		let chosenCourse = chooseTask(columns, source.droppableId, source.index);
		let newData: IColumns;

		if (chosenCourse) {
			newData = addTask(columns, destination?.droppableId, destination?.index, chosenCourse) ?? {};
			dispatch(setColumns(newData));
			dispatch(setSemesterColumns({ id: currentSemester, columns: newData }));
		}
	};

	return (
		<div className="card-wrapper">
			<div className={`card ${isSelected ? 'selected' : ''}`} onClick={() => setIsMenuOpen(true)}>
				<div className="card__header">
					<p>{course.title}</p>
				</div>
				<div className="card__tags">
					{course.professional_trajectories?.map((tag) => (
						<Tag text={tag.slug} color={tag.color} tooltipText={tag.title} shouldShowTooltip key={tag.id} />
					))}
				</div>
			</div>
			<div className="submenu" style={{ bottom: isMenuOpen ? 1 : 39, height: isMenuOpen ? 38 : 0 }}>
				<Button
					classname="closeBtn"
					icon={<CloseOutlined style={{ fontSize: 16 }} />}
					onClick={() => setIsMenuOpen(false)}
				/>
				<Button
					classname={`chooseBtn ${!isSelected && isDisabled ? 'disabled' : ''} ${
						isSelected ? 'cancel' : 'select'
					} `}
					onClick={() => {
						if (isSelected) {
							onCloseHandle();
							setIsSelected(false);
						} else {
							onChooseHandle();
							setIsSelected(true);
						}
					}}
					disabled={!isSelected && isDisabled}
				>
					{isSelected ? 'Отменить выбор' : 'Выбрать'}
				</Button>
				<Button
					classname="questionBtn"
					icon={<QuestionOutlined style={{ fontSize: 16 }} />}
					onClick={() => dispatch(setDisciplineId(course.id))}
				/>
			</div>
		</div>
	);
};
