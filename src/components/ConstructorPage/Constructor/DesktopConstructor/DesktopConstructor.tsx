import React from 'react';
import { TrackPicker } from '../TrackPicker/TrackPicker';
import { TrackProgresses } from '../TrackProgresses/TrackProgresses';
import { EducationModule } from '../../../../common/types';
import { SemesterPagination } from '../SemesterPagination/SemesterPagination';
import { useMediaQuery } from 'react-responsive';
import { Collapse } from 'antd';

type DesktopConstructorProps = {
	modules: EducationModule[];
};

export const DesktopConstructor: React.FC<DesktopConstructorProps> = ({ modules }) => {
	const isDesktop = useMediaQuery({ minWidth: 1216 });

	return (
		<div className="constructor__middle">
			{!isDesktop && (
				<div className="score">
					<Collapse defaultActiveKey="1" className="score__collapse">
						<Collapse.Panel key="1" header="Мои траектории" className="score__panel">
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
