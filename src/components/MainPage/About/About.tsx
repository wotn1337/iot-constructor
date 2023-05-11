import React from 'react';
import { WhatIsIOT } from '../../../images';
import { Hexagon } from '../../../components';
import { Col, Row, Typography } from 'antd';
import s from './About.module.scss';
import { HexagonList } from '../../common/HexagonList/HexagonList';
import { useMediaQuery } from 'react-responsive';
import { HexagonListMobile } from '../../common/HexagonList/HexagonListMobile';

type AboutProps = {};

export const About: React.FC<AboutProps> = () => {
	const isXLarge = useMediaQuery({ minWidth: 1370 });
	const isLarge = useMediaQuery({ minWidth: 1005 });
	const isTablet = useMediaQuery({ maxWidth: 769 });

	const list = [
		'Создайте свой уникальный путь',
		'Всегда можно изменить траекторию обучения',
		'Удобный и разнообразный выбор каждый семестр',
		'Освойте востребованные IT профессии',
	];

	return (
		<Row justify="center" align="middle" className={s.about}>
			{isLarge && (
				<Col>
					<Hexagon
						size={isXLarge ? 550 / Math.sqrt(3) : 150}
						color="white"
						rotateAngle={44.14}
						border={{ width: 1, color: '#D9D9D9', padding: isXLarge ? 66.5 : 30 }}
						image={WhatIsIOT}
					/>
				</Col>
			)}
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
				{!isTablet ? <HexagonList list={list} className={s.info__list} /> : <HexagonListMobile items={list} />}
			</Col>
		</Row>
	);
};
