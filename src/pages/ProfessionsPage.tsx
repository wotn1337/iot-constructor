import React, { useContext, useEffect, useState } from 'react';
import { FilterableContent } from '../components/common/FilterableContent/FilterableContent';
import { Helmet } from 'react-helmet';
import { useEducationalProgramsQuery } from '../hooks';
import { useProfessionalTrajectoriesQuery } from '../hooks/useProfessionalTrajectoriesQuery';
import { ServerErrorContext } from '../providers/ServerErrorProvider';
import { Id } from '../common/types';

type ProfessionsPageProps = {};

export const ProfessionsPage: React.FC<ProfessionsPageProps> = () => {
	const { setError } = useContext(ServerErrorContext);
	const {
		data: educationalDirections,
		isLoading: educationalDirectionsLoading,
		isFetching: educationalDirectionsFetching,
		error: educationalDirectionsError,
	} = useEducationalProgramsQuery();
	const [selectedEducationalDirections, setSelectedEducationalDirections] = useState<Id[]>([]);

	const {
		data: professionalTrajectories,
		isLoading: professionalTrajectoriesLoading,
		isFetching: professionalTrajectoriesFetching,
		error: professionalTrajectoriesError,
	} = useProfessionalTrajectoriesQuery();
	const [selectedProfessionalTrajectories, setSelectedProfessionalTrajectories] = useState<Id[]>([]);

	useEffect(() => {
		if (educationalDirectionsError) {
			setError(educationalDirectionsError);
		}
		if (professionalTrajectoriesError) {
			setError(professionalTrajectoriesError);
		}
	}, [educationalDirectionsError, professionalTrajectoriesError]);

	return (
		<>
			<Helmet>
				<title>Профессии</title>
			</Helmet>
			<FilterableContent
				title="Профессии"
				filtersState={[
					{
						title: 'Образовательные программы',
						key: 'educationalPrograms',
						items:
							educationalDirections?.map((dir) => ({
								id: dir.id,
								title: dir.title,
							})) ?? [],
						selectedIds: selectedEducationalDirections,
						onChange: (ids) => setSelectedEducationalDirections(ids),
					},
					{
						title: 'Профессиональные траектории',
						key: 'professionalTrajectories',
						items:
							professionalTrajectories?.map((track) => ({
								id: track.id,
								title: track.title,
							})) ?? [],
						selectedIds: selectedProfessionalTrajectories,
						onChange: (ids) => setSelectedProfessionalTrajectories(ids),
					},
				]}
				sortersState={{
					sorters: [],
					onChange: () => {},
					directions: {},
				}}
				content={<div>content</div>}
			/>
		</>
	);
};
