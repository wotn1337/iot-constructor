import React from 'react';
import { EmployeesGrid } from '../EmployeesGrid/EmployeesGrid';
import { Loader } from '../../common/Loader/Loader';
import { useTutorsQuery } from '../../../hooks/useTutorsQuery';

type OurTutorsProps = {};

export const OurTutors: React.FC<OurTutorsProps> = () => {
	const { data, isFetching, isLoading } = useTutorsQuery();

	return (
		<Loader loading={isLoading || isFetching} size="large">
			{data && <EmployeesGrid title="Наши тьюторы" employees={data} />}
		</Loader>
	);
};
