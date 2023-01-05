import React from 'react';
import { EmployeesGrid } from '../EmployeesGrid/EmployeesGrid';
import { Loader } from '../../common/Loader/Loader';
import { useROPsQuery } from '../../../hooks/useROPsQuery';

type OurROPsProps = {};

export const OurROPs: React.FC<OurROPsProps> = () => {
	const { data, isFetching, isLoading } = useROPsQuery();

	return (
		<Loader loading={isLoading || isFetching} size="large">
			{data && <EmployeesGrid title="Наши руководители образовательных программ" employees={data} />}
		</Loader>
	);
};
