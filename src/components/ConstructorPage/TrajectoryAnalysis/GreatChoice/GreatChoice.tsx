import React from 'react';
import { Typography } from 'antd';
import { GreatChoice as GreatChoiceIcon } from '../../../../images';
import s from './GreateChoice.module.scss';

type GreatChoiceProps = {};

export const GreatChoice: React.FC<GreatChoiceProps> = () => {
	return (
		<div className={s.greatChoiceWrapper}>
			<div className={s.greatChoiceInner}>
				<h3 className={s.greatChoiceInner__title}>Отличный выбор!</h3>
				<img src={GreatChoiceIcon} alt="great choice" className={s.greatChoiceInner__image} />
				<Typography.Paragraph className={s.greatChoiceInner__text}>
					Мы тщательно проанализировали твой выбор и подготовили подробный анализ траектории. <br />
					<br />
					Не забывай, что система ИОТ позволяет в любой момент передумать и изменить траекторию, чтобы
					получить желаемые навыки.
				</Typography.Paragraph>
			</div>
			{/*<Row justify="center" align="middle" gutter={250}>*/}
			{/*	<Col>*/}
			{/*		<Space direction="vertical" size={60}>*/}
			{/*			<h3>Отличный выбор!</h3>*/}
			{/*			<Typography.Paragraph>*/}
			{/*				А теперь Вы можете узнать чуть больше о траектории, которую выбрали.*/}
			{/*				<br />*/}
			{/*				Надеемся, информацию будет для Вас полезной!*/}
			{/*			</Typography.Paragraph>*/}
			{/*		</Space>*/}
			{/*	</Col>*/}
			{/*	<Col>*/}
			{/*		<img src={GreatChoiceIcon} alt="great choice" />*/}
			{/*	</Col>*/}
			{/*</Row>*/}
		</div>
	);
};
