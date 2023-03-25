import React, { useContext, useEffect } from 'react';
import { EmployeesGrid } from '../EmployeesGrid/EmployeesGrid';
import { Loader } from '../../common/Loader/Loader';
import { useROPsQuery } from '../../../hooks/useROPsQuery';
import { ServerErrorContext } from '../../../providers/ServerErrorProvider';

type OurROPsProps = {};

export const OurROPs: React.FC<OurROPsProps> = () => {
	const { data, isFetching, isLoading, error } = useROPsQuery();
	const { setError } = useContext(ServerErrorContext);

	useEffect(() => {
		if (error) {
			setError(error);
		}
	}, [error]);

	return (
		<Loader loading={isLoading || isFetching} size="large">
			{data && <EmployeesGrid title="Наши руководители образовательных программ" employees={data} />}
		</Loader>
	);
};
