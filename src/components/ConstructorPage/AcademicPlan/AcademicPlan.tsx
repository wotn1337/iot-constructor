import React, { useState } from 'react';
import { Space, Switch, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import s from './AcademicPlan.module.scss';
import { useConstructorContext } from '../Context';
import { AcademicPlanGrid } from './AcademicPlanGrid/AcademicPlanGrid';
import { Column } from '../Context/types';
import { Semester } from './types';

type AcademicPlanProps = {};

const getSemesters = (columnItems: Column['items']) => {
	const semesters: Semester[] = [
		{
			id: 3,
			number: 3,
			lists: [
				{ id: 1, type: 'default', title: 'Обязательные курсы', items: [] },
				{ id: 1, type: 'primary', title: 'Курсы по выбору', items: [] },
			],
		},
	];

	columnItems.forEach((item) => {
		if (item.is_spec) {
			item.disciplines.forEach((disc) => {
				semesters[0].lists[1].items.push(disc);
			});
		} else {
			item.disciplines.forEach((disc) => {
				semesters[0].lists[0].items.push(disc);
			});
		}
	});

	return semesters;
};

export const AcademicPlan: React.FC<AcademicPlanProps> = () => {
	const {
		state: { columns },
	} = useConstructorContext();
	const [showDefault, setShowDefault] = useState(true);

	return (
		<>
			<Space className={s.academicPlanWrapper} direction="vertical" size={48}>
				<div className={s.titleWrapper}>
					<h4>Подробный учебный план</h4>
					<Space direction="horizontal" size={10}>
						<Typography.Text type="secondary">Показывать обязательные курсы</Typography.Text>
						<Switch
							checkedChildren={<CheckOutlined />}
							unCheckedChildren={<CloseOutlined />}
							defaultChecked
							checked={showDefault}
							onChange={setShowDefault}
						/>
					</Space>
				</div>
				<AcademicPlanGrid semesters={getSemesters(columns[1].items)} showDefault={showDefault} />
			</Space>
		</>
	);
};
