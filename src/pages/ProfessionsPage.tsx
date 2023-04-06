import React, { useContext, useEffect, useMemo, useState } from 'react';
import { FilterableContent } from '../components/common/FilterableContent/FilterableContent';
import { Helmet } from 'react-helmet';
import { useEducationalProgramsQuery } from '../hooks';
import { useProfessionalTrajectoriesQuery } from '../hooks/useProfessionalTrajectoriesQuery';
import { ServerErrorContext } from '../providers/ServerErrorProvider';
import { Id } from '../common/types';
import { useProfessionsInfinityQuery } from '../hooks/useProfessionsInfinityQuery';
import { ProfessionsGrid } from '../components/Professions/ProfessionsGrid/ProfessionsGrid';
import { ProfessionType } from '../components/Professions/types';
import { Sorter } from '../components/common/FilterableContent/types';
import { sorters } from '../components/Professions/constants';

type ProfessionsPageProps = {};

export const ProfessionsPage: React.FC<ProfessionsPageProps> = () => {
	const { setError } = useContext(ServerErrorContext);
	const [selectedSorter, setSelectedSorter] = useState<Sorter>(sorters[0]);

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

	const {
		data: professionsData,
		isLoading: professionsLoading,
		isFetching: professionsFetching,
		error: professionsError,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
		refetch,
	} = useProfessionsInfinityQuery({
		professionalTrajectories: selectedProfessionalTrajectories,
		educationalPrograms: selectedEducationalDirections,
		[selectedSorter.sortField]: selectedSorter.direction,
		withProfessionalTrajectories: true,
		withEducationalPrograms: true,
	});

	const professions = useMemo(() => {
		const result: ProfessionType[] = [];
		if (professionsData) {
			professionsData.pages.forEach((page) => result.push(...page.professions));
		}
		return result;
	}, [professionsData]);

	const handleClearSelection = () => {
		setSelectedEducationalDirections([]);
		setSelectedProfessionalTrajectories([]);
	};

	useEffect(() => {
		void refetch();
	}, [selectedEducationalDirections, selectedProfessionalTrajectories, selectedSorter]);

	useEffect(() => {
		if (educationalDirectionsError) {
			setError(educationalDirectionsError);
		}
		if (professionalTrajectoriesError) {
			setError(professionalTrajectoriesError);
		}
		if (professionsError) {
			setError(professionsError);
		}
	}, [educationalDirectionsError, professionalTrajectoriesError, professionsError]);

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
						loading: educationalDirectionsFetching || educationalDirectionsLoading,
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
						loading: professionalTrajectoriesFetching || professionalTrajectoriesLoading,
					},
				]}
				sortersState={{
					sorters,
					selectedSorter,
					onChange: (index) => setSelectedSorter(sorters[index]),
				}}
				content={<ProfessionsGrid professions={professions} />}
				onCLearSelection={handleClearSelection}
				fetchMoreState={{
					loading: professionsLoading || professionsFetching || isFetchingNextPage,
					onFetchMore: fetchNextPage,
					hideFetchMoreButton: !hasNextPage,
				}}
			/>
		</>
	);
};
