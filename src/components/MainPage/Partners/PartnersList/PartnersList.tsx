import React from 'react';
import { Image, Space } from 'antd';

type PartnersListProps = {
	images: {
		id: string | number;
		src: string;
	}[];
};

export const PartnersList: React.FC<PartnersListProps> = ({ images }) => {
	return (
		<Space size={66}>
			{images.map((image) => (
				<Image src={image.src} key={image.id} preview={false} height={80} />
			))}
		</Space>
	);
};
