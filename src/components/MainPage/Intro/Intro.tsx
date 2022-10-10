import React from 'react';
import s from './Intro.module.scss';
import { Col, Image, Row } from 'antd';
import { IntroImage } from '../../../images';

type IntroProps = {};

export const Intro: React.FC<IntroProps> = () => {
	return (
		<Row className={s.intro} gutter={168} justify="center" align="top" style={{ margin: 0 }}>
			<Col className={s.intro__info} flex="584px" style={{ paddingLeft: 0 }}>
				<h1 className={s.info__title}>Современный формат обучения</h1>
			</Col>
			<Col className={s.intro__image} style={{ paddingRight: 0 }}>
				<Image src={IntroImage} preview={false} />
			</Col>
		</Row>
	);
};
