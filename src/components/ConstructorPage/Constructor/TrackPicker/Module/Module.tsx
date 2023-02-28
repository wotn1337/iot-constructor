import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { EducationModule } from '../../../../../common/types';
import { Droppable } from 'react-beautiful-dnd';
import './Module.scss';
import { Column } from '../../../Context/types';
import { Collapse } from 'antd';
import { useConstructorContext } from '../../../Context';

const { Panel } = Collapse;

type ModuleProps = {
	column: Column;
	module: EducationModule;
};

export const Module: React.FC<ModuleProps> = ({ module, column }) => {
	const {
		state: { semesters, columns, draggableId },
	} = useConstructorContext();

	const [isModuleCollapse, setIsModuleCollapse] = useState<string[] | string>(
		!module.is_spec ? '' : [`${module.id}`]
	);

	const isDropDisabled = !module.is_spec || module.disciplines.length === module.choice_limit;

	const getPlaceholderClassName = () => {
		if (module.disciplines.length) {
			return '';
		} else if (module.id.toString() === draggableId) {
			return 'module_wrapper__placeholder module_wrapper__placeholder__target_background';
		} else return 'module_wrapper__placeholder module_wrapper__placeholder__empty_background';
	};

	const getPanelHeaderClassName = () => {
		if (module.id.toString() === draggableId) {
			return 'module_wrapper__title__target';
		} else if (module.disciplines.length === module.choice_limit) {
			return 'module_wrapper__title__finish';
		} else return 'module_wrapper__title';
	};

	useEffect(() => {
		if (!module.is_spec) {
			return;
		}
		const moduleId = column.id === 2 ? module.id : `module_${module.id}`;
		const choiceList = columns['2']?.items.find((item) => item.id === moduleId);
		setIsModuleCollapse(choiceList?.choice_limit === choiceList?.disciplines.length ? '' : [`${module.id}`]);
	}, [semesters]);

	return column.id === 1 && !module.is_spec ? null : (
		<Droppable droppableId={module.id.toString()} key={module.id} isDropDisabled={isDropDisabled}>
			{(provided, snapshot) => {
				return (
					<div className="module_wrapper" {...provided.droppableProps} ref={provided.innerRef}>
						<Collapse
							ghost
							activeKey={isModuleCollapse}
							onChange={() => setIsModuleCollapse((prev) => (prev === '' ? [`${module.id}`] : ''))}
						>
							<Panel className={getPanelHeaderClassName()} header={module.title} key={module.id}>
								<div className={getPlaceholderClassName()}>
									{!module.disciplines.length && <p>Выбрано {` 0 / ${module.choice_limit}`}</p>}
								</div>
								{module.disciplines.map((item, index) => (
									<Card
										course={item}
										key={item.id}
										index={index}
										isDragDisabled={!module.is_spec}
										isSelected={column.id === 2}
										droppableId={module.id.toString()}
									/>
								))}
							</Panel>
						</Collapse>
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
};
