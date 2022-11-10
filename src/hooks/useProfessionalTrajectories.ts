import { useEffect, useState } from 'react';
import { Trajectory } from '../common/types';
import { professionalTrajectoriesAPI } from '../API/API';
import { message } from 'antd';

export const useProfessionalTrajectories = () => {
	const [trajectories, setTrajectories] = useState<Trajectory[]>([]);
	const [loading, setLoading] = useState(true);

	// get trajectories
	useEffect(() => {
		setLoading(true);
		const { getProfessionalTrajectories } = professionalTrajectoriesAPI;

		getProfessionalTrajectories()
			.then((data) => setTrajectories(data))
			.catch(() => message.error('Не удалось получить треки :('))
			.finally(() => setLoading(false));
	}, []);

	return { trajectories, loading };
};
