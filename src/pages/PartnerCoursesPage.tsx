import React, { useContext, useEffect, useMemo, useState } from 'react';
import { PartnerCoursesContent } from '../components/PartnerCoursesList/PartnerCoursesContent';
import { Helmet } from 'react-helmet';
import { FilterableContent } from '../components/common/FilterableContent/FilterableContent';
import { ServerErrorContext } from '../providers/ServerErrorProvider';
import { useEducationalProgramsQuery, usePartnerCoursesInfinityQuery } from '../hooks';
import { Id, PartnerCourseType } from '../common/types';
import { useProfessionalTrajectoriesQuery } from '../hooks/useProfessionalTrajectoriesQuery';
import { usePartnersQuery } from '../hooks/usePartnersQuery';
import { BackgroundWrapper } from '../components/common/BackgroundWrapper/BackgroundWrapper';

export const PartnerCoursesPage: React.FC = () => {
	const { setError } = useContext(ServerErrorContext);

	const {
		data: educationalDirections,
		isLoading: educationalDirectionsLoading,
		isFetching: educationalDirectionsFetching,
		error: educationalDirectionsError,
	} = useEducationalProgramsQuery();
	const [selectedEducationalDirections, setSelectedEducationalDirections] = useState<Id[]>([]);

	const {
		data: partners,
		isLoading: partnersLoading,
		isFetching: partnersFetching,
		error: partnersError,
	} = usePartnersQuery();
	const [selectedPartners, setSelectedPartners] = useState<Id[]>([]);

	const {
		data: professionalTrajectories,
		isLoading: professionalTrajectoriesLoading,
		isFetching: professionalTrajectoriesFetching,
		error: professionalTrajectoriesError,
	} = useProfessionalTrajectoriesQuery();
	const [selectedProfessionalTrajectories, setSelectedProfessionalTrajectories] = useState<Id[]>([]);

	const {
		data: partnerCoursesData,
		isLoading: partnerCoursesLoading,
		isFetching: partnerCoursesFetching,
		error: partnerCoursesError,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
		refetch,
	} = usePartnerCoursesInfinityQuery({
		professionalTrajectories: selectedProfessionalTrajectories,
		educationalPrograms: selectedEducationalDirections,
		partners: selectedPartners,
	});

	const partnerCourses = useMemo(() => {
		const result: PartnerCourseType[] = [];
		if (partnerCoursesData) {
			partnerCoursesData.pages.forEach((page) => result.push(...page.courses));
		}
		return result;
	}, [partnerCoursesData]);

	const handleClearSelection = () => {
		setSelectedEducationalDirections([]);
		setSelectedProfessionalTrajectories([]);
		setSelectedPartners([]);
	};

	useEffect(() => {
		if (educationalDirectionsError) {
			setError(educationalDirectionsError);
		}
		if (professionalTrajectoriesError) {
			setError(professionalTrajectoriesError);
		}
		if (partnersError) {
			setError(partnersError);
		}
		if (partnerCoursesError) {
			setError(partnerCoursesError);
		}
	}, [educationalDirectionsError, professionalTrajectoriesError, partnersError, partnerCoursesError]);

	useEffect(() => {
		void refetch();
	}, [selectedEducationalDirections, selectedProfessionalTrajectories, selectedPartners]);

	return (
		<BackgroundWrapper>
			<Helmet>
				<title>Курсы партнеров</title>
			</Helmet>
			<FilterableContent
				title="Курсы партнеров"
				filtersState={[
					{
						title: 'Образовательная программа',
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
						title: 'Партнер',
						key: 'partners',
						items:
							partners?.map((partner) => ({
								id: partner.id,
								title: partner.title,
							})) ?? [],
						selectedIds: selectedPartners,
						onChange: (ids) => setSelectedPartners(ids),
						loading: partnersFetching || partnersLoading,
					},
					{
						title: 'Траектория',
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
				content={<PartnerCoursesContent partnerCourses={partnerCourses} />}
				onCLearSelection={handleClearSelection}
				fetchMoreState={{
					loading: partnerCoursesLoading || partnerCoursesFetching || isFetchingNextPage,
					onFetchMore: fetchNextPage,
					hideFetchMoreButton: !hasNextPage,
				}}
			/>
		</BackgroundWrapper>
	);
};
