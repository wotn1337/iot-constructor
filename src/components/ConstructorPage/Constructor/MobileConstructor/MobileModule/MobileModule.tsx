import React, { useEffect, useState } from 'react';
import { Collapse, Space, Tooltip } from 'antd';
import { Column } from '../../../Context/types';
import { EducationModule } from '../../../../../common/types';
import { MobileCard } from '../MobileCard/MobileCard';
import './MobileModule.scss';
import { useConstructorContext } from '../../../Context';
import { QuestionCircleOutlined } from '@ant-design/icons';

type MobileModuleProps = {
	column: Column;
	module: EducationModule;
};

const { Panel } = Collapse;

export const MobileModule: React.FC<MobileModuleProps> = ({ module, column }) => {
	const {
		state: { semesters, columns },
	} = useConstructorContext();

	const [isModuleCollapse, setIsModuleCollapse] = useState<string[] | string>(
		!module.is_spec ? '' : [`${module.id}`]
	);
	const [isModuleFinish, setIsModuleFinish] = useState<boolean>(false);

	const getPanelHeaderClassName = () => (isModuleFinish || !module.is_spec ? 'finish' : undefined);
	const getExtra = () => {
		return (
			<Tooltip
				title="Здесь расположены обязательные дисциплины, их невозможно изменить"
				placement="topRight"
				trigger="click"
				color="#FA8C16"
			>
				<QuestionCircleOutlined className="panel_icon" onClick={(e) => e.stopPropagation()} />
			</Tooltip>
		);
	};

	useEffect(() => {
		if (!module.is_spec) {
			return;
		}
		const moduleId = column.id === 2 ? module.id : `module_${module.id}`;
		const choiceList = columns['2']?.items.find((item) => item.id === moduleId);
		setIsModuleCollapse(choiceList?.choice_limit === choiceList?.disciplines.length ? '' : [`${module.id}`]);
		setIsModuleFinish(choiceList?.choice_limit === choiceList?.disciplines.length);
	}, [semesters]);

	return (
		<Collapse
			className="mobile-module"
			defaultActiveKey={module.id}
			activeKey={isModuleCollapse}
			onChange={() => setIsModuleCollapse((prev) => (prev === '' ? [`${module.id}`] : ''))}
			ghost
		>
			<Panel
				className={getPanelHeaderClassName()}
				header={module.title}
				key={module.id}
				extra={!module.is_spec && getExtra()}
			>
				<Space size={8} style={{ width: '100%' }} direction="vertical">
					{module.disciplines.map((item, index) => (
						<MobileCard
							course={item}
							key={`${item.id}_${index}`}
							moduleId={module.id.toString()}
							index={index}
							isRequiredModule={!module.is_spec}
						/>
					))}
				</Space>
			</Panel>
		</Collapse>
	);
};
