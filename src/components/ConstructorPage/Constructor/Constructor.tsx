import React, { useContext, useEffect } from 'react';
import './Constructor.scss';
import { useEducationalModules } from '../../../hooks/useEducationalModules';
import { Loader } from '../../common/Loader/Loader';
import { setSemesters, setTracks, useConstructorContext } from '../Context';
import { useProfessionalTrajectoriesQuery } from '../../../hooks/useProfessionalTrajectoriesQuery';
import { useMediaQuery } from 'react-responsive';
import { DesktopConstructor } from './DesktopConstructor/DesktopConstructor';
import { MobileConstructor } from './MobileConstructor/MobileConstructor';
import { ServerErrorContext } from '../../../providers/ServerErrorProvider';

type ConstructorProps = {};

export const Constructor: React.FC<ConstructorProps> = () => {
	const {
		state: { semesters, currentSemester, selectedDirection },
		dispatch,
	} = useConstructorContext();
	const { data: trajectories, error: trajectoriesError } = useProfessionalTrajectoriesQuery();
	const {
		modules,
		loading,
		semesters: semestersFromBack,
		error: modulesError,
	} = useEducationalModules(selectedDirection ?? 1, currentSemester);
	const { setError } = useContext(ServerErrorContext);

	useEffect(() => {
		if (trajectoriesError) {
			setError(trajectoriesError);
		}
		if (modulesError) {
			setError(modulesError);
		}
	}, [trajectoriesError, modulesError]);

	const isDesktop = useMediaQuery({ minWidth: 960 });

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
