import React from 'react';
import './RequiredModule.scss';
import { Card } from '../Card/Card';
import { Collapse } from 'antd';
import { EducationModule, Id } from '../../../../../common/types';

const { Panel } = Collapse;

type RequiredModuleProps = {
	module: EducationModule;
	columnId: Id;
};

export const RequiredModule: React.FC<RequiredModuleProps> = ({ module, columnId }) => {
	return (
		<div className="required_module">
			<Collapse className="module" ghost>
				<Panel header={module.title} key="1">
					{module.disciplines.map((item, index) => (
						<Card
							course={item}
							key={item.id}
							index={index}
							isDragDisabled={!module.is_spec}
							isSelected={columnId === 2}
							droppableId={module.id.toString()}
						/>
					))}
				</Panel>
			</Collapse>
		</div>
	);
};
