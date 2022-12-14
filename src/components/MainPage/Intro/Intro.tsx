import React from 'react';
import s from './Intro.module.scss';
import { Col, Image, Row, Typography } from 'antd';
import { IntroImage } from '../../../images';
import { Button } from '../../../components';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { reachGoal } from '../../../common/utils';

const { Paragraph } = Typography;

type IntroProps = {};

export const Intro: React.FC<IntroProps> = () => {
	return (
		<Row className={s.intro} gutter={100} justify="center" align="top">
			<Col className={s.intro__info} flex="625px">
				<h1 className={s.info__title}>Современный формат обучения</h1>
				<Paragraph className={s.info__text}>
					Система индивидуальных образовательных траекторий позволяет сделать обучение в университете
					персонализированным и получить дополнительные компетенции
				</Paragraph>
				<NavLink to={ROUTES.CONSTRUCTOR} onClick={() => reachGoal('create')}>
					<Button type="primary" style={{ width: 289 }}>
						Создать свою траекторию
					</Button>
				</NavLink>
			</Col>
			<Col className={s.intro__image}>
				<Image src={IntroImage} preview={false} width={457} />
			</Col>
		</Row>
	);
};
