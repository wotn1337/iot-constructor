import React from 'react';
import './Advantages.scss';
import { Col, Row, Timeline } from 'antd';
import { AdvantagesList } from './constants';
import { AdvantageItem } from './AdvantageItem/AdvantageItem';
import { DotComponent } from './AdvantageItem/DotComponent';
import { LabelComponent } from './AdvantageItem/LabelComponent/LabelComponent';
import { ElectiveIcon, LevelIcon, TechnologyIcon } from './../../../images';
import { useMediaQuery } from 'react-responsive';
import { MobileAdvantages } from './MobileAdvantages';

const advantages = AdvantagesList.map((item) => <AdvantageItem {...item} key={item.id} />);

export const Advantages = () => {
	const isDesktop = useMediaQuery({ minWidth: 965 });

	return (
		<Row className="advantagesWrapper">
			<Col className="title">
				<h4 className="text">Преимущества</h4>
			</Col>
			<Col className="advantages">
				{isDesktop ? (
					<Timeline mode="alternate">
						<Timeline.Item
							position="right"
							label={<LabelComponent align="right" image={LevelIcon} />}
							dot={<DotComponent />}
						>
							{advantages[0]}
						</Timeline.Item>
						<Timeline.Item
							position="left"
							label={<LabelComponent align="left" image={TechnologyIcon} />}
							dot={<DotComponent />}
						>
							{advantages[1]}
						</Timeline.Item>
						<Timeline.Item
							position="right"
							label={<LabelComponent align="right" image={ElectiveIcon} />}
							dot={<DotComponent />}
						>
							{advantages[2]}
						</Timeline.Item>
					</Timeline>
				) : (
					<MobileAdvantages />
				)}
			</Col>
		</Row>
	);
};
