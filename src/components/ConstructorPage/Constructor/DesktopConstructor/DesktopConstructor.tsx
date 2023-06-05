import React from 'react';
import { TrackPicker } from '../TrackPicker/TrackPicker';
import { TrackProgresses } from '../TrackProgresses/TrackProgresses';
import { EducationModule } from '../../../../common/types';
import { SemesterPagination } from '../SemesterPagination/SemesterPagination';
import { useMediaQuery } from 'react-responsive';
import { Collapse, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

type DesktopConstructorProps = {
	modules: EducationModule[];
};

export const DesktopConstructor: React.FC<DesktopConstructorProps> = ({ modules }) => {
	const isDesktop = useMediaQuery({ minWidth: 1216 });
	const getExtra = () => {
		return (
			<Tooltip title="Здесь отображаются выбранные вами траектории" placement="topRight" trigger="click">
				<QuestionCircleOutlined onClick={(e) => e.stopPropagation()} />
			</Tooltip>
		);
	};

	return (
		<div className="constructor__middle">
			{!isDesktop && (
				<div className="score">
					<Collapse defaultActiveKey="1" className="score__collapse">
						<Collapse.Panel key="1" header="Мои траектории" className="score__panel" extra={getExtra()}>
							<TrackProgresses />
						</Collapse.Panel>
					</Collapse>
				</div>
			)}
			<SemesterPagination gap={16} height={40} width={50} fontNumberSize={20} />
			<div className="picker">
				<TrackPicker modules={modules} />
			</div>
			<div className="score">
				{isDesktop && (
					<>
						<div className="score__title">Мои траектории</div>
						<TrackProgresses />
					</>
				)}
			</div>
		</div>
	);
};
