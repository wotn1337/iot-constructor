import React from 'react';
import s from './MobileApp.module.scss';
import { Col, Image, Row, Typography } from 'antd';
import { Button } from '../../common/Button/Button';
import { QrImage } from '../../../images';

const { Paragraph } = Typography;

type MobileAppProps = {};

export const MobileApp: React.FC<MobileAppProps> = () => {
	return (
		<section className={s.wrapper}>
			<div className={s.wrapper__background} />
			<Row gutter={95} justify="center" align="bottom" className={s.wrapper__row}>
				<Col className={s.row__info} flex="497.5px">
					<h3 className={s.info__title}>Ещё остались вопросы?</h3>
					<Paragraph className={s.info__text}>
						Больше информации и ответы на часто задаваемые вопросы, можно найти в нашем приложении
					</Paragraph>
					<Button type="primary">Скачать приложение</Button>
				</Col>
				<Col className={s.row__image}>
					<Image src={QrImage} preview={false} />
				</Col>
			</Row>
		</section>
	);
};
