import React from 'react';
import s from './Intro.module.scss';
import { Typography } from 'antd';
import { IntroImage } from '../../../images';
import { Button } from '../../../components';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { reachGoal } from '../../../common/utils';

const { Paragraph } = Typography;

type IntroProps = {};

export const Intro: React.FC<IntroProps> = () => {
	return (
		<div className={s.intro__wrapper}>
			<div className={s.intro__inner}>
				<div className={s.intro__content}>
					<h1 className={s.intro__content__title}>Современный формат обучения</h1>
					<Paragraph className={s.intro__content__text}>
						Система индивидуальных образовательных траекторий позволяет сделать обучение в университете
						персонализированным и получить дополнительные компетенции
					</Paragraph>
					<NavLink to={ROUTES.CONSTRUCTOR} onClick={() => reachGoal('create')}>
						<Button type="primary" classname={s.intro__content__button}>
							Создать свою траекторию
						</Button>
					</NavLink>
				</div>
				<div className={s.intro__imageWrapper}>
					<img src={IntroImage} className={s.intro__image} alt="intro" width={450} />
				</div>
			</div>
		</div>
	);
};
