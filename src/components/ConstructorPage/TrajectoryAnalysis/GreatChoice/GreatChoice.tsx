import React from 'react';
import { Col, Row, Space, Typography } from 'antd';
import { GreatChoice as GreatChoiceIcon } from '../../../../images';
import s from './GreateChoice.module.scss';

type GreatChoiceProps = {};

export const GreatChoice: React.FC<GreatChoiceProps> = () => {
	return (
		<div className={s.greatChoiceWrapper}>
			<Row justify="center" align="middle" gutter={250}>
				<Col>
					<Space direction="vertical" size={60}>
						<h3>Отличный выбор!</h3>
						<Typography.Paragraph>
							А теперь Вы можете узнать чуть больше о траектории, которую выбрали.
							<br />
							Надеемся, информацию будет для Вас полезной!
						</Typography.Paragraph>
					</Space>
				</Col>
				<Col>
					<img src={GreatChoiceIcon} alt="great choice" />
				</Col>
			</Row>
		</div>
	);
};
