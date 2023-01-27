import React from 'react';
import { Popover } from 'antd';
import { PlusSquareTwoTone } from '@ant-design/icons';
import { AcademicPlanItem } from '../../../../types';
import './ElectedDiscpline.scss';
import { ElectedDisciplineContent } from './ElectedDisciplineContent/ElectedDisciplineContent';

type ElectedDisciplineProps = {
	item: AcademicPlanItem;
};

export const ElectedDiscipline: React.FC<ElectedDisciplineProps> = ({ item }) => {
	return (
		<Popover
			trigger="click"
			content={<ElectedDisciplineContent item={item} />}
			placement="rightTop"
			overlayClassName="elected-discipline-popover"
		>
			<div className="item-inner__empty">
				<span>{item.emptyText}</span>
				<PlusSquareTwoTone twoToneColor="#FA8C16" style={{ fontSize: 20 }} />
			</div>
		</Popover>
	);
};
