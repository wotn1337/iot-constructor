import React, { useState } from 'react';
import { Space, Switch, Typography } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import s from './AcademicPlan.module.scss';

type AcademicPlanProps = {};

export const AcademicPlan: React.FC<AcademicPlanProps> = () => {
	const [showMain, setShowMain] = useState(true);

	return (
		<Space className={s.academicPlanWrapper} direction="vertical" size={48}>
			<div className={s.titleWrapper}>
				<h4>Подробный учебный план</h4>
				<Space direction="horizontal" size={10}>
					<Typography.Text type="secondary">Показывать обязательные курсы</Typography.Text>
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						defaultChecked
						checked={showMain}
						onChange={setShowMain}
					/>
				</Space>
			</div>
		</Space>
	);
};
