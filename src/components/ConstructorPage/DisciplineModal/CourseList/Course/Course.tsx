import React from 'react';
import { Course as CourseType } from '../../../../../common/types';
import { Col, Row, Space, Typography } from 'antd';
import s from './Course.module.scss';
import { useMediaQuery } from 'react-responsive';

type CourseProps = CourseType & { number: number };

export const Course: React.FC<CourseProps> = ({ title, realization, partner, number }) => {
	const isMobile = useMediaQuery({ maxWidth: 450 });

	return (
		<Row className={s.course} wrap={isMobile} justify={partner ? 'space-between' : 'start'}>
			<Col flex="85px" className={s.course__number}>
				<div className={s.number__inner}>{number}</div>
			</Col>
			<Col flex="auto" className={s.course__info}>
				<div className={s.info__title}>{title}</div>
				<Space size={8} className={s.info__realization}>
					Технология реализации: <Typography.Text type="secondary">{realization}</Typography.Text>
				</Space>
			</Col>
			{partner && (
				<Col
					flex={isMobile ? 'auto' : '135px'}
					span={isMobile ? 24 : undefined}
					className={s.course__image__wrapper}
				>
					<div className={s.image__inner}>
						<img src={partner.logo} alt={partner.title} className={s.course__image} />
					</div>
				</Col>
			)}
		</Row>
	);
};
