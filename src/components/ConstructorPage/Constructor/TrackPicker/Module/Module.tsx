import React from 'react';
import { Card } from '../Card/Card';
import { EducationModule } from '../../../../../common/types';
import { Droppable } from 'react-beautiful-dnd';
import s from './Module.module.scss';
import { RequiredModule } from '../RequiredModule/RequiredModule';
import { Column } from '../../../Context/types';

type ModuleProps = {
	column: Column;
	module: EducationModule;
};

export const Module: React.FC<ModuleProps> = ({ module, column }) => {
	return column.id === 1 && !module.is_spec ? null : (
		<Droppable
			droppableId={module.id.toString()}
			key={module.id}
			isDropDisabled={!module.is_spec || module.disciplines.length === module.choice_limit}
		>
			{(provided) => {
				return !module.is_spec ? (
					<RequiredModule module={module} columnId={column.id} />
				) : (
					<div className={s.module} {...provided.droppableProps} ref={provided.innerRef}>
						<p className={s.module__title}>{module.title}</p>
						<div className={!module.disciplines.length ? s.module__placeholder : undefined}>
							{!module.disciplines.length && <p>Курс не выбран</p>}
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
						</div>
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
};
