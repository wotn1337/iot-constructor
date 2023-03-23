import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'antd';
import { usePartnersQuery } from '../../../../hooks/usePartnersQuery';
import s from './PartnersList.module.scss';
import { ServerErrorContext } from '../../../../providers/ServerErrorProvider';

type PartnersListProps = {};

export const PartnersList: React.FC<PartnersListProps> = () => {
	const { data: partners, error } = usePartnersQuery();
	const { setError } = useContext(ServerErrorContext);

	useEffect(() => {
		if (error) {
			setError(error);
		}
	}, [error]);

	return (
		<Row gutter={[60, 20]} justify="center" align="middle" className={s.partnersList}>
			{partners?.map((p) => (
				<Col key={p.id}>
					<img src={p.logo} height={80} alt={p.title} className={s.partnersList__logo} />
				</Col>
			))}
		</Row>
	);
};
