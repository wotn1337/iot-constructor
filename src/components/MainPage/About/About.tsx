import React from 'react';
import { IntroImage } from '../../../images';
import { Hexagon } from '../../../components';
import { Col, Row, Typography } from 'antd';
import s from './About.module.scss';
import { HexagonList } from '../../common/HexagonList/HexagonList';

type AboutProps = {};

export const About: React.FC<AboutProps> = () => {
	const list = [
		'Создайте свой уникальный путь',
		'Всегда можно изменить траекторию обучения',
		'Удобный и разнообразный выбор каждый семестр',
		'Освойте востребованные IT профессии',
	];

	return (
		<Row justify="center" align="middle" className={s.about}>
			<Col>
				<Hexagon
					size={550 / Math.sqrt(3)}
					color="white"
					rotateAngle={44.14}
					border={{ width: 1, color: '#D9D9D9', padding: 66.5 }}
					image={IntroImage}
				/>
			</Col>
			<Col className={s.info}>
				<h4 className={s.info__title}>Что такое индивидуальные образовательные траектории?</h4>
				<Typography.Paragraph className={s.info__text}>
					Это уникальный маршрут студентов Уральского федерального университета, который формируется каждый
					семестр
					<br />
					<br />
					Студенты могут выбирать разные дисциплины, преподавателей, уровни сложности и технологии обучения
				</Typography.Paragraph>
				<Typography.Paragraph className={s.info__text}></Typography.Paragraph>
				<HexagonList list={list} />
			</Col>
		</Row>
	);
};
