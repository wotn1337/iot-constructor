import React, { useEffect, useMemo, useContext } from 'react';
import { useProfessionalTrajectoryByIdQuery } from '../../../hooks/useProfessionalTrajectoryByIdQuery';
import { TrajectoryInfo } from './TrajectoryInfo/TrajectoryInfo';
import { Loader } from '../../common/Loader/Loader';
import { setFinalAcademicPlan, useConstructorContext } from '../Context';
import { AcademicPlan } from '../AcademicPlan/AcademicPlan';
import { Space } from 'antd';
import { useEducationalModules } from '../../../hooks/useEducationalModules';
import { STEP_TYPE } from '../types';
import { getAcademicSemestersFromConstructor, getAcademicSemestersFromTrajectory } from './utils';
import { GreatChoice } from './GreatChoice/GreatChoice';
import { PossibleProfessions } from '../../Professions/PossibleProfessions/PossibleProfessions';
import { useProfessionsPaginateQuery } from '../../../hooks/useProfessionsPaginateQuery';
import { Id } from '../../../common/types';
import { ServerErrorContext } from '../../../providers/ServerErrorProvider';

type TrajectoryAnalysisProps = {};

export const TrajectoryAnalysis: React.FC<TrajectoryAnalysisProps> = () => {
	const {
		state: { selectedTrajectory, semesters: constructorSemesters, selectedDirection, selectedType, academicPlan },
		dispatch,
	} = useConstructorContext();
	const { setError } = useContext(ServerErrorContext);
	const {
		data,
		isFetching: trajectoryFetching,
		isLoading: trajectoryLoading,
		error: trajectoryError,
		refetch,
	} = useProfessionalTrajectoryByIdQuery(selectedTrajectory);
	const {
		trajectorySemesters,
		loading: modulesLoading,
		error: modulesError,
	} = useEducationalModules(selectedDirection, undefined, selectedTrajectory);
	const {
		data: possibleProfessionsData,
		isLoading: professionsLoading,
		isFetching: professionsFetching,
		error: possibleProfessionsError,
	} = useProfessionsPaginateQuery({ professionalTrajectories: [selectedTrajectory as Id] });
	const loading = useMemo(
		() => trajectoryFetching || trajectoryLoading || modulesLoading || professionsLoading || professionsFetching,
		[trajectoryFetching, trajectoryLoading, modulesLoading, professionsLoading, professionsFetching]
	);

	useEffect(() => {
		if (trajectoryError) {
			setError(trajectoryError);
		}
		if (modulesError) {
			setError(modulesError);
		}
		if (possibleProfessionsError) {
			setError(possibleProfessionsError);
		}
	}, [trajectoryError, modulesError, possibleProfessionsError]);

	useEffect(() => {
		refetch();
	}, [selectedTrajectory]);

	useEffect(() => {
		switch (selectedType) {
			case STEP_TYPE.CONSTRUCTOR: {
				dispatch(setFinalAcademicPlan(getAcademicSemestersFromConstructor(constructorSemesters)));
				break;
			}
			case STEP_TYPE.TRAJECTORIES: {
				dispatch(
					setFinalAcademicPlan(getAcademicSemestersFromTrajectory(trajectorySemesters, selectedTrajectory))
				);
				break;
			}
		}
	}, [trajectorySemesters, constructorSemesters, selectedTrajectory, selectedType]);

	useEffect(() => {
		window.scroll({ top: 0 });
	}, []);

	return (
		<Loader loading={loading} size="large">
			<Space direction="vertical" size={100}>
				<GreatChoice />
				{data && <TrajectoryInfo {...data} />}
				<PossibleProfessions professions={possibleProfessionsData?.professions ?? []} />
				{!!academicPlan && !!academicPlan.length && <AcademicPlan semesters={academicPlan} />}
			</Space>
		</Loader>
	);
};
