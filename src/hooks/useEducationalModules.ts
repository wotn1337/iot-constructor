import { useEffect, useState } from 'react';
import { EducationModule, Id } from '../common/types';
import { educationalModulesAPI } from '../API/API';
import { message } from 'antd';
import { Semester } from '../components/ConstructorPage/Context/types';

export const useEducationalModules = (id?: Id, semester?: number, trajectoryId?: Id) => {
	const [modules, setModules] = useState<EducationModule[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [semesters, setSemesters] = useState<Semester[]>([]);

	// get modules
	useEffect(() => {
		setLoading(true);
		const { getEducationalModules } = educationalModulesAPI;

		getEducationalModules(id, semester, trajectoryId)
			.then((data) => {
				console.log(data);
				if (semester) {
					setModules(data.semesters[0].educationalModules);
					let newSemesters: Semester[] = [];
					for (let i = 1; i <= data.meta.total; i++) {
						newSemesters.push({
							id: i,
							order: i,
							name: `${i}`,
							finish: false,
						});
					}
					setSemesters(newSemesters);
				}
			})
			.catch(() => message.error('Не удалось получить список курсов :('))
			.finally(() => {
				setLoading(false);
			});
	}, [semester]);

	return { modules, loading, semesters };
};
