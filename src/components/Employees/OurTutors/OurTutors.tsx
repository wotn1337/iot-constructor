import React, { useContext, useEffect } from 'react';
import { EmployeesGrid } from '../EmployeesGrid/EmployeesGrid';
import { Loader } from '../../common/Loader/Loader';
import { useTutorsQuery } from '../../../hooks/useTutorsQuery';
import { ServerErrorContext } from '../../../providers/ServerErrorProvider';

type OurTutorsProps = {};

export const OurTutors: React.FC<OurTutorsProps> = () => {
	const { data, isFetching, isLoading, error } = useTutorsQuery();
	const { setError } = useContext(ServerErrorContext);

	useEffect(() => {
		if (error) {
			setError(error);
		}
	}, [error]);

	return (
		<Loader loading={isLoading || isFetching} size="large">
			{data && <EmployeesGrid title="Наши тьюторы" employees={data} />}
		</Loader>
	);
};
