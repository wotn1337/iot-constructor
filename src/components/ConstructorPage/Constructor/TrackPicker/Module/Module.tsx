import React from 'react';
import { Card } from '../Card/Card';
import { EducationModule } from '../../../../../common/types';
import { Droppable } from 'react-beautiful-dnd';
import './Module.scss';
import { Column } from '../../../Context/types';
import { Collapse } from 'antd';

const { Panel } = Collapse;

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
				return (
					<div className="module_wrapper" {...provided.droppableProps} ref={provided.innerRef}>
						<Collapse ghost defaultActiveKey={module.is_spec ? [`${module.id}`] : ''}>
							<Panel header={module.title} key={module.id}>
								<div className={!module.disciplines.length ? 'module_wrapper__placeholder' : undefined}>
									{!module.disciplines.length && (
										<p>
											Выбрано{' '}
											<strong className="module_wrapper__placeholder__strong">
												{`0 / ${module.choice_limit}`}
											</strong>
										</p>
									)}
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
							</Panel>
						</Collapse>
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
};
