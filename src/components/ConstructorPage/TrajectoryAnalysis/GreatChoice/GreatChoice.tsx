import React from 'react';
import { Col, Row, Typography } from 'antd';
import { GreatChoice as GreatChoiceIcon } from '../../../../images';
import s from './GreateChoice.module.scss';

type GreatChoiceProps = {};

export const GreatChoice: React.FC<GreatChoiceProps> = ({ ...props }) => {
	return (
		<div className={s.greatChoiceWrapper}>
			<Row>
				<Col>
					<h3>Отличный выбор!</h3>
					<Typography.Paragraph>
						Наше дело не так однозначно, как может показаться: дальнейшее развитие различных форм
						деятельности в значительной степени обусловливает важность стандартных подходов. Картельные
						сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке неоднозначны и будут
						подвергнуты целой серии независимых исследований.
					</Typography.Paragraph>
				</Col>
				<Col>
					<img src={GreatChoiceIcon} alt='great choice'/>
				</Col>
			</Row>
		</div>
	);
};
