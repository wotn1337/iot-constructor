import React, { useState } from 'react';
import { Space, Switch, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import s from './AcademicPlan.module.scss';
import { AcademicPlanGrid } from './AcademicPlanGrid/AcademicPlanGrid';
import { Semester as AcademicSemester } from './types';

type AcademicPlanProps = {
	semesters: AcademicSemester[];
};

export const AcademicPlan: React.FC<AcademicPlanProps> = ({ semesters }) => {
	const [showDefault, setShowDefault] = useState(true);

	return (
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
			<AcademicPlanGrid semesters={semesters} showDefault={showDefault} />
		</Space>
	);
};
