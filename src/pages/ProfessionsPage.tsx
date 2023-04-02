import React, { useContext, useEffect, useMemo, useState } from 'react';
import { FilterableContent } from '../components/common/FilterableContent/FilterableContent';
import { Helmet } from 'react-helmet';
import { useEducationalProgramsQuery } from '../hooks';
import { useProfessionalTrajectoriesQuery } from '../hooks/useProfessionalTrajectoriesQuery';
import { ServerErrorContext } from '../providers/ServerErrorProvider';
import { Id, SortDirection } from '../common/types';
import { useProfessionsInfinityQuery } from '../hooks/useProfessionsInfinityQuery';
import { ProfessionsGrid } from '../components/Professions/ProfessionsGrid/ProfessionsGrid';
import { ProfessionType } from '../components/Professions/types';

type ProfessionsPageProps = {};

export const ProfessionsPage: React.FC<ProfessionsPageProps> = () => {
	const { setError } = useContext(ServerErrorContext);
	const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

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
		sortBySalary: sortDirection,
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
	}, [selectedEducationalDirections, selectedProfessionalTrajectories, sortDirection]);

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
				sortersState={[
					{
						key: 'salary',
						titles: {
							asc: 'По возрастанию зарплаты',
							desc: 'По убыванию зарплаты',
						},
						direction: sortDirection,
						onChange: (dir) => setSortDirection(dir),
					},
				]}
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
