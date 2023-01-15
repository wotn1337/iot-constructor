import { Semester as ConstructorSemester } from '../Context/types';
import { AcademicPlanItem, Semester as AcademicSemester } from '../AcademicPlan/types';
import { EducationalModulesResponse } from '../../../API/types';
import { Id } from '../../../common/types';

export const getAcademicSemestersFromConstructor = (semesters: ConstructorSemester[]) => {
	const result: AcademicSemester[] = [];

	semesters.forEach((semester) => {
		const academicSemester: AcademicSemester = {
			id: semester.id,
			name: semester.name,
			lists: [
				{
					id: 1,
					type: 'default',
					title: 'Обязательные дисциплины',
					items: [],
					placeholder: 'В этом семестре отсутствуют обязательные дисциплины',
				},
				{
					id: 2,
					type: 'primary',
					title: 'Дисциплины по выбору',
					items: [],
					placeholder: 'В этом семестре отсутствуют дисциплины по выбору',
				},
			],
		};

		semester.columns?.[2].items.forEach((item) => {
			if (item.is_spec) {
				academicSemester.lists[1].items.push(...item.disciplines);
			} else {
				academicSemester.lists[0].items = [...item.disciplines];
			}
		});

		result.push(academicSemester);
	});

	return result;
};

export const getAcademicSemestersFromTrajectory = (
	semesters: EducationalModulesResponse['semesters'],
	trajectoryId: Id | undefined
) => {
	if (!trajectoryId) {
		return [];
	}

	const result: AcademicSemester[] = [];

	semesters.forEach((semester) => {
		const academicSemester: AcademicSemester = {
			id: semester.id,
			name: semester.text_representation,
			lists: [
				{
					id: 1,
					type: 'default',
					title: 'Обязательные дисциплины',
					items: [],
					placeholder: 'В этом семестре отсутствуют обязательные дисциплины',
				},
				{
					id: 2,
					type: 'primary',
					title: 'Дисциплины по выбору',
					items: [],
					placeholder: 'В этом семестре отсутствуют дисциплины по выбору',
				},
			],
		};

		semester.educationalModules.forEach((module) => {
			if (!module.is_spec) {
				academicSemester.lists[0].items.push(...module.disciplines);
			} else {
				const discLen = module.disciplines.length;

				if (discLen === 0) {
					academicSemester.lists[1].items.push(
						...Array<AcademicPlanItem>(module.choice_limit).fill({
							isEmpty: true,
							emptyText: 'Здесь мы оставили выбор за тобой',
							moduleId: module.id,
							id: Math.floor(Math.random() * 100).toString(),
						})
					);
				} else {
					if (discLen > module.choice_limit) {
						const discCopy = [...module.disciplines];

						for (let i = 0; i < module.choice_limit; i++) {
							const index = Math.floor(Math.random() * discCopy.length);
							academicSemester.lists[1].items.push(discCopy[index]);
							discCopy.splice(index, 1);
						}
					} else if (discLen < module.choice_limit) {
						academicSemester.lists[1].items.push(
							...module.disciplines,
							...Array<AcademicPlanItem>(module.choice_limit - discLen).fill({
								isEmpty: true,
								emptyText: 'Здесь мы оставили выбор за тобой',
								moduleId: module.id,
							})
						);
					} else {
						academicSemester.lists[1].items.push(...module.disciplines);
					}
				}
			}
		});

		result.push(academicSemester);
	});

	return result;
};
