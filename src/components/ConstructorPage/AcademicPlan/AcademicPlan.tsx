import React, { useState } from 'react';
import { Space, Switch, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import s from './AcademicPlan.module.scss';
import { useConstructorContext } from '../Context';
import { AcademicPlanGrid } from './AcademicPlanGrid/AcademicPlanGrid';
import { Semester as ConstructorSemester } from '../Context/types';
import { Semester as AcademicSemester } from './types';

type AcademicPlanProps = {};

const getAcademicSemesters = (semesters: ConstructorSemester[]) => {
	const result: AcademicSemester[] = [];

	semesters.forEach((semester) => {
		const academicSemester: AcademicSemester = {
			id: semester.id,
			name: semester.name,
			lists: [
				{
					id: 1,
					type: 'default',
					title: 'Обязательные дисциплины',
					items: [],
					placeholder: 'В этом семестре отсутствуют обязательные дисциплины',
				},
				{
					id: 2,
					type: 'primary',
					title: 'Дисциплины по выбору',
					items: [],
					placeholder: 'В этом семестре отсутствуют дисциплины по выбору',
				},
			],
		};

		semester.columns?.[2].items.forEach((item) => {
			if (item.is_spec) {
				console.log(item.disciplines);
				academicSemester.lists[1].items.push(...item.disciplines);
			} else {
				academicSemester.lists[0].items = [...item.disciplines];
			}
		});

		result.push(academicSemester);
	});

	return result;
};

export const AcademicPlan: React.FC<AcademicPlanProps> = () => {
	const {
		state: { semesters },
	} = useConstructorContext();
	const [showDefault, setShowDefault] = useState(true);

	return (
		<>
			<Space className={s.academicPlanWrapper} direction="vertical" size={48}>
				<div className={s.titleWrapper}>
					<h4>Список дисциплин</h4>
					<Space direction="horizontal" size={10}>
						<Typography.Text type="secondary">Показывать обязательные дисциплины</Typography.Text>
						<Switch
							checkedChildren={<CheckOutlined />}
							unCheckedChildren={<CloseOutlined />}
							defaultChecked
							checked={showDefault}
							onChange={setShowDefault}
						/>
					</Space>
				</div>
				<AcademicPlanGrid semesters={getAcademicSemesters(semesters)} showDefault={showDefault} />
			</Space>
		</>
	);
};
