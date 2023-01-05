import React from 'react';
import { TrackPicker } from '../TrackPicker/TrackPicker';
import { TrackProgresses } from '../TrackProgresses/TrackProgresses';
import { EducationModule } from '../../../../common/types';
import { SemesterPagination } from '../SemesterPagination/SemesterPagination';
import { useMediaQuery } from 'react-responsive';

type DesktopConstructorProps = {
	modules: EducationModule[];
};

export const DesktopConstructor: React.FC<DesktopConstructorProps> = ({ modules }) => {
	const isDesktop = useMediaQuery({ minWidth: 1216 });

	return (
		<div className="constructor__middle">
			<SemesterPagination gap={16} height={40} width={50} fontNumberSize={20} />
			<div className="picker">
				<TrackPicker modules={modules} />
			</div>
			{isDesktop && (
				<div className="score">
					<div className="score__title">Мои траектории</div>
					<TrackProgresses />
				</div>
			)}
		</div>
	);
};
