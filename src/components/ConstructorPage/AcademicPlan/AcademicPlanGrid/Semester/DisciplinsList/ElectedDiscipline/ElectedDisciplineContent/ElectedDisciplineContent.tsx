import React from 'react';
import { Loader } from '../../../../../../../common/Loader/Loader';
import { useEducationalModuleByIdQuery } from '../../../../../../../../hooks';
import { AcademicPlanItem } from '../../../../../types';
import { DisciplinsList } from '../../DisciplinsList';
import { Discipline } from '../../../../../../../../common/types';
import { setFinalAcademicPlan, useConstructorContext } from '../../../../../../Context';

type ElectedDisciplineContentProps = {
	item: AcademicPlanItem;
};

export const ElectedDisciplineContent: React.FC<ElectedDisciplineContentProps> = ({ item }) => {
	const { data, isFetching, isLoading } = useEducationalModuleByIdQuery(item.moduleId);
	const {
		state: { academicPlan },
		dispatch,
	} = useConstructorContext();

	const addDiscipline = (discipline: Discipline) => {
		console.log(discipline);
		dispatch(
			setFinalAcademicPlan(
				academicPlan?.map((semester) => ({
					...semester,
					lists: semester.lists.map((list) => {
						if (list.type === 'primary') {
							return {
								...list,
								items: list.items.map((i) =>
									i.id === item.id
										? {
												...discipline,
												isEmpty: false,
												moduleId: item.moduleId,
										  }
										: i
								),
							};
						}
						return list;
					}),
				}))
			)
		);
	};

	return (
		<Loader loading={isLoading || isFetching}>
			{data && <DisciplinsList items={data.disciplines} addDiscipline={addDiscipline} />}
		</Loader>
	);
};
