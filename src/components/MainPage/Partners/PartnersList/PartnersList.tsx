import React from 'react';
import { Col, Row } from 'antd';
import { usePartnersQuery } from '../../../../hooks/usePartnersQuery';
import s from './PartnersList.module.scss';

type PartnersListProps = {};

export const PartnersList: React.FC<PartnersListProps> = () => {
	const { data: partners } = usePartnersQuery();
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
