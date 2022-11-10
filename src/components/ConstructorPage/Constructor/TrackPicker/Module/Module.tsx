import React from 'react';
import { Card } from '../Card/Card';
import { EducationModule } from '../../../../../common/types';
import { Droppable } from 'react-beautiful-dnd';
import s from './Module.module.scss';

type ModuleProps = {
	module: EducationModule;
};

export const Module: React.FC<ModuleProps> = ({ module }) => {
	return (
		<Droppable droppableId={module.id.toString()} key={module.id}>
			{(provided) => {
				return (
					<div className={s.module} {...provided.droppableProps} ref={provided.innerRef}>
						<p className={s.module__title}>{module.title}</p>
						<div className={!module.disciplines.length ? s.module__placeholder : undefined}>
							{!module.disciplines.length && <p>Курс не выбран</p>}
							{module.disciplines.map((item) => (
								<Card course={item} key={item.id} />
							))}
						</div>
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
};
