import React, { useEffect } from 'react';
import './Constructor.scss';
import { useEducationalModules } from '../../../hooks/useEducationalModules';
import { Loader } from '../../common/Loader/Loader';
import { setSemesters, setTracks, useConstructorContext } from '../Context';
import { useProfessionalTrajectoriesQuery } from '../../../hooks/useProfessionalTrajectoriesQuery';
import { useMediaQuery } from 'react-responsive';
import { DesktopConstructor } from './DesktopConstructor/DesktopConstructor';
import { MobileConstructor } from './MobileConstructor/MobileConstructor';

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

	const isDesktop = useMediaQuery({ minWidth: 910 });

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
				{isDesktop ? <DesktopConstructor modules={modules} /> : <MobileConstructor modules={modules} />}
			</Loader>
		</div>
	);
};
