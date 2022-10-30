import React from 'react';
import { Image, Space } from 'antd';
import { Partner } from '../../../../common/types';

type PartnersListProps = {
	partners: Partner[];
};

export const PartnersList: React.FC<PartnersListProps> = ({ partners }) => {
	return (
		<Space size={66}>
			{partners.map((p) => (
				<Image src={p.logo} key={p.id} preview={false} height={80} />
			))}
		</Space>
	);
};
