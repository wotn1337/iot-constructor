import React, { useEffect } from 'react';
import { Space } from 'antd';
import './Constructor.scss';
import { Semester } from './Semester/Semester';
import { TrackPicker } from './TrackPicker/TrackPicker';
import { useEducationalModules } from '../../../hooks/useEducationalModules';
import { Loader } from '../../common/Loader/Loader';
import { setCurrentSemester, setSemesters, setTracks, useConstructorContext } from '../Context';
import { TrackProgresses } from './TrackProgresses/TrackProgresses';
import { useProfessionalTrajectoriesQuery } from '../../../hooks/useProfessionalTrajectoriesQuery';

type ConstructorProps = {};

export const Constructor: React.FC<ConstructorProps> = () => {
	const {
		state: { semesters, currentSemester, selectedDirection },
		dispatch,
	} = useConstructorContext();
	const { data: trajectories } = useProfessionalTrajectoriesQuery();
	let {
		modules,
		loading,
		semesters: semestersFromBack,
	} = useEducationalModules(selectedDirection ?? 1, currentSemester);

	useEffect(() => {
		dispatch(setTracks(trajectories?.map((track) => ({ ...track, points: 0, percent: 0 })) ?? []));
	}, [trajectories]);

	useEffect(() => {
		if (semesters.length === 0) {
			dispatch(setSemesters(semestersFromBack));
		}
	}, [semestersFromBack]);

	return (
		<div className="constructor">
			<Loader loading={loading}>
				<div className="constructor__middle">
					<div className="constructor__middle__pagination">
						<Space direction="vertical" size={16}>
							<p className="title">семестры</p>
							{semesters.map((sem) => (
								<Semester
									semester={sem}
									key={sem.id}
									selected={currentSemester === sem.order}
									setCurrentSemester={(order) => dispatch(setCurrentSemester(order))}
								/>
							))}
						</Space>
					</div>
					<div className="picker">
						<TrackPicker modules={modules} />
					</div>
					<div className="score">
						<div className="score__title">Мои траектории</div>
						<TrackProgresses />
					</div>
				</div>
			</Loader>
		</div>
	);
};
