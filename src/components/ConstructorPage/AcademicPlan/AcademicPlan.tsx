import React, { ReactInstance, useRef, useState } from 'react';
import { Space, Switch, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import s from './AcademicPlan.module.scss';
import { AcademicPlanGrid } from './AcademicPlanGrid/AcademicPlanGrid';
import { Semester as AcademicSemester } from './types';
import { SaveToPdfButton } from '../../common/SaveToPdfButton/SaveToPdfButton';

type AcademicPlanProps = {
	semesters: AcademicSemester[];
};

export const AcademicPlan: React.FC<AcademicPlanProps> = ({ semesters }) => {
	const [showDefault, setShowDefault] = useState(true);
	const academicPlanRef = useRef<ReactInstance>(null);

	return (
		<Space className={s.academicPlanWrapper} direction="vertical" size={48}>
			<div className={s.titleWrapper}>
				<h4>Список дисциплин</h4>
				<Space size={40}>
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
					<SaveToPdfButton
						tooltipText="Вы можете распечатать эту версию списка дисциплин или сохранить в pdf"
						targetRef={academicPlanRef}
					/>
				</Space>
			</div>
			<AcademicPlanGrid semesters={semesters} showDefault={showDefault} ref={academicPlanRef} />
		</Space>
	);
};
