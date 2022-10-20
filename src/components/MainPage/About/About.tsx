import React from 'react';
import { IntroImage } from '../../../images';
import { Hexagon } from '../../../components';
import { Col, Row, Space, Typography } from 'antd';
import s from './About.module.scss';

type AboutProps = {};

export const About: React.FC<AboutProps> = () => {
	const list = [
		{ id: 1, text: 'Создайте свой уникальный путь' },
		{
			id: 2,
			text: 'Всегда можно изменить траекторию обучения',
		},
		{
			id: 3,
			text: 'Удобный и разнообразный выбор каждый семестр',
		},
		{
			id: 4,
			text: 'Освойте востребованные IT профессии',
		},
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
					семестр.
					<br />
					<br />
					Студенты могут выбирать разные дисциплины, преподавателей, уровни сложности и технологии обучения.
				</Typography.Paragraph>
				<Typography.Paragraph className={s.info__text}></Typography.Paragraph>
				<div className={s.info__list}>
					{list.map((item) => (
						<Space key={item.id} align="start">
							<Hexagon size={10} rotateAngle={90} color="#FA8C16" style={{ marginTop: 2 }} />
							{item.text}
						</Space>
					))}
				</div>
			</Col>
		</Row>
	);
};
