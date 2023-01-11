import React from 'react';
import { Course as CourseType } from '../../../../../common/types';
import { Col, Image, Row, Space, Typography } from 'antd';
import s from './Course.module.scss';
import { useMediaQuery } from 'react-responsive';

type CourseProps = CourseType & { number: number };

export const Course: React.FC<CourseProps> = ({ title, realization, partner, number }) => {
	const isMobile = useMediaQuery({ maxWidth: 450 });

	return (
		<Row className={s.course} wrap={isMobile} justify={partner ? 'space-between' : 'start'}>
			<Col flex="75px" className={s.course__number}>
				{number}
			</Col>
			<Col flex="auto" className={s.course__info}>
				<div className={s.info__title}>{title}</div>
				<Space size={8} className={s.info__realization}>
					Технология реализации: <Typography.Text type="secondary">{realization}</Typography.Text>
				</Space>
			</Col>
			{partner && (
				<Col flex={isMobile ? 'auto' : '135px'} className={s.course__image}>
					<Image src={partner.logo} preview={false} style={{ maxHeight: 60 }} />
				</Col>
			)}
		</Row>
	);
};
