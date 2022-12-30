import React from 'react';
import { Col, Row, Space, Typography } from 'antd';
import { Logo } from '../../../common/Logo/Logo';
import { useSocialNetworksQuery } from '../../../../hooks/useSocialNetworksQuery';
import { reachGoal } from '../../../../common/utils';
import './MobileFooter.scss';
import { IconText } from '../../../common/IconText/IconText';
import { LocationIcon, MailIcon, PhoneIcon } from '../../../../images';
import { TitledList } from '../../../common/TitledList/TitledList';
import { useContactsQuery } from '../../../../hooks/useContactsQuery';

type MobileFooterProps = {};

export const MobileFooter: React.FC<MobileFooterProps> = () => {
	const { data: contacts } = useContactsQuery();
	const { data: socialNetworks } = useSocialNetworksQuery();

	return (
		<Space direction="vertical" className="mobile-footer" size={40}>
			<Row justify="space-between" align="middle">
				<Col>
					<Logo />
				</Col>
				<Col>
					<Space size={16}>
						{socialNetworks?.map((sn) => (
							<a
								href={sn.url}
								target="_blank"
								rel="noreferrer"
								onClick={() => reachGoal(sn.name === 'Telegram' ? 'telegram' : 'vk')}
							>
								<img src={sn.icon} width={25} alt={sn.name} />
							</a>
						))}
					</Space>
				</Col>
			</Row>
			<TitledList
				title="Контакты приёмной комиссии"
				items={[
					<IconText
						icon={LocationIcon}
						textElement={<span className="text_default">{contacts?.address}</span>}
						key={contacts?.address}
					/>,
					<IconText
						icon={PhoneIcon}
						textElement={
							<a
								className="text_default"
								href={`tel:${contacts?.phone_number}`}
								onClick={() => reachGoal('telephone')}
							>
								{contacts?.phone_number}
							</a>
						}
						key={contacts?.phone_number}
					/>,
					<IconText
						icon={MailIcon}
						textElement={
							<a
								className="text_default"
								href={`mailto:${contacts?.email}`}
								onClick={() => reachGoal('mailTo')}
							>
								{contacts?.email}
							</a>
						}
						key={contacts?.email}
					/>,
				]}
				titleGap={20}
				itemsGap={16}
			/>
			<Typography.Text type="secondary" className="irit">
				© ИРИТ-РТФ ИОТ, 2022
			</Typography.Text>
		</Space>
	);
};
