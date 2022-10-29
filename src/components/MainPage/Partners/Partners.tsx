import React from 'react';
import { PartnersList } from './PartnersList/PartnersList';
import { Button } from '../../common/Button/Button';
import s from './Partners.module.scss';
import { Space } from 'antd';

type PartnersProps = {};

const images = [
	{
		id: 1,
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Yandex_logo_en.svg/800px-Yandex_logo_en.svg.png',
	},
	{
		id: 2,
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png',
	},
	{
		id: 3,
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Sberbank_Logo_2020.svg/2560px-Sberbank_Logo_2020.svg.png',
	},
	{ id: 4, src: 'https://acdn.tinkoff.ru/static/documents/703d269e-ec01-4187-9544-5f01fb27bbb6.png' },
];

export const Partners: React.FC<PartnersProps> = () => {
	return (
		<Space direction="vertical" align="center" size={82} className={s.partners}>
			<h4 className={s.partners__title}>Партнёры образовательных программ</h4>
			<PartnersList images={images} />
			<Button text="Посмотреть всех" href="/partners" />
		</Space>
	);
};
