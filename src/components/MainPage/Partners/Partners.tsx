import React from 'react';
import { PartnersList } from './PartnersList/PartnersList';
import { Button } from '../../common/Button/Button';
import s from './Partners.module.scss';
import { Space } from 'antd';

type PartnersProps = {};

export const Partners: React.FC<PartnersProps> = () => {
	return (
		<Space direction="vertical" align="center" size={82} className={s.partners}>
			<h4 className={s.partners__title}>Партнёры образовательных программ</h4>
			<PartnersList />
			<Button href="#/partners">Посмотреть всех</Button>
		</Space>
	);
};
