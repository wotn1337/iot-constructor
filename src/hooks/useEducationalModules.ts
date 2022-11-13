import { useEffect, useState } from 'react';
import { EducationModule, Id } from '../common/types';
import { educationalModulesAPI } from '../API/API';
import { message } from 'antd';

export const useEducationalModules = (id: Id, semester: number) => {
	const [modules, setModules] = useState<EducationModule[]>([]);
	const [loading, setLoading] = useState(true);

	// get modules
	useEffect(() => {
		setLoading(true);
		const { getEducationalModules } = educationalModulesAPI;

		getEducationalModules(id, semester)
			.then((data) => setModules(data))
			.catch(() => message.error('Не удалось получить список курсов :('))
			.finally(() => setLoading(false));
	}, [semester]);

	return { modules, loading };
};
