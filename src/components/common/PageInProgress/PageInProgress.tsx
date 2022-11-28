import React from 'react';
import { Result } from 'antd';
import { ToolTwoTone } from '@ant-design/icons';
import './PageInProgress.scss';

type PageInProgressProps = {
	page?: string;
};

export const PageInProgress: React.FC<PageInProgressProps> = ({ page }) => {
	return (
		<Result
			className="page-in-progress"
			icon={<ToolTwoTone twoToneColor="#1890FF" />}
			title={`Раздел "${page || ''}" пока в разработке`}
		/>
	);
};
