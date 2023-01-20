import React from 'react';
import { Collapse, Space } from 'antd';
import { Column } from '../../../Context/types';
import { EducationModule } from '../../../../../common/types';
import { MobileCard } from '../MobileCard/MobileCard';
import './MobileModule.scss';

type MobileModuleProps = {
	column: Column;
	module: EducationModule;
};

const { Panel } = Collapse;

export const MobileModule: React.FC<MobileModuleProps> = ({ module }) => {
	return (
		<Collapse ghost>
			<Panel header={module.title} key={module.id}>
				<Space size={8} style={{ width: '100%' }} direction="vertical">
					{module.disciplines.map((item, index) => (
						<MobileCard
							course={item}
							key={`${item.id}_${index}`}
							moduleId={module.id.toString()}
							index={index}
						/>
					))}
				</Space>
			</Panel>
		</Collapse>
	);
};
