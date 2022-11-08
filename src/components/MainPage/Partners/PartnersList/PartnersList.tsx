import React from 'react';
import { Image, Space } from 'antd';
import { usePartnersQuery } from '../../../../hooks/usePartnersQuery';

type PartnersListProps = {};

export const PartnersList: React.FC<PartnersListProps> = () => {
	const { data: partners } = usePartnersQuery();
	return (
		<Space size={66}>
			{partners?.map((p) => (
				<Image src={p.logo} key={p.id} preview={false} height={80} />
			))}
		</Space>
	);
};
