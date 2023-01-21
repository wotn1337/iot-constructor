import React from 'react';
import { PartnersList } from './PartnersList/PartnersList';
import { Button } from '../../common/Button/Button';
import s from './Partners.module.scss';
import { Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { reachGoal } from '../../../common/utils';
import { useMediaQuery } from 'react-responsive';

type PartnersProps = {};

export const Partners: React.FC<PartnersProps> = () => {
	const isLarge = useMediaQuery({ minWidth: 821 });

	return (
		<Space direction="vertical" align="center" size={isLarge ? 82 : 50} className={s.partners}>
			<h4 className={s.partners__title}>Партнёры образовательных программ</h4>
			<PartnersList />
			<NavLink to={ROUTES.PARTNERS} onClick={() => reachGoal('seePartners')}>
				<Button>Посмотреть всех</Button>
			</NavLink>
		</Space>
	);
};
