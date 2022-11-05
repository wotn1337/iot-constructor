import React from 'react';
import { Col, Layout, Row, Space } from 'antd';
import { PageRoutes } from '../../../routes';
import './Footer.scss';
import { useContacts } from '../../../hooks/useContacts';
import { useSocialNetworks } from '../../../hooks/useSocialNetworks';
import { Loader } from '../../common/Loader/Loader';
import { TitledList } from '../../common/TitledList/TitledList';
import { IconText } from '../../common/IconText/IconText';
import { LocationIcon, MailIcon, PhoneIcon } from '../../../images';
import { NavLink } from 'react-router-dom';

const { Footer: AntdFooter } = Layout;

export const Footer = () => {
	const { contacts, loading: contactsLoading } = useContacts();
	const { socialNetworks, loading: socialNetworksLoading } = useSocialNetworks();

	return (
		<AntdFooter className="footer">
			<Loader loading={contactsLoading || socialNetworksLoading} size="default">
				<Row gutter={168} justify="center" style={{ margin: 0 }}>
					<Col className="footer__brand">
						<Space direction="vertical" size="large">
							<div className="footer__brand__logo" />
							<p className="text_default">© ИРИТ-РТФ ИОТ, 2022</p>
						</Space>
					</Col>
					<Col className="footer__contacts">
						<TitledList
							title="Контакты приёмной комиссии"
							items={[
								<IconText
									icon={LocationIcon}
									textElement={<span className="text_default">{contacts?.address}</span>}
								/>,
								<IconText
									icon={PhoneIcon}
									textElement={<span className="text_default">{contacts?.phone_number}</span>}
								/>,
								<IconText
									icon={MailIcon}
									textElement={<span className="text_default">{contacts?.email}</span>}
								/>,
							]}
							titleGap={20}
							itemsGap={20}
						/>
					</Col>
					<Col className="footer__navigation">
						<TitledList
							title="Ссылки"
							items={PageRoutes.map((item) => (
								<NavLink to={item.route} key={item.route} className="text_default">
									{item.title}
								</NavLink>
							))}
							titleGap={20}
							itemsGap={16}
						/>
					</Col>
					<Col className="footer__social">
						<TitledList
							title="Мы в социальных сетях"
							titleGap={14}
							itemsGap={16}
							items={socialNetworks.map((sn) => (
								<IconText
									key={sn.name}
									icon={sn.icon}
									textElement={
										<a href={sn.url} className="text_default" target="_blank">
											{sn.name}
										</a>
									}
									gap={8}
								/>
							))}
						/>
					</Col>
				</Row>
			</Loader>
		</AntdFooter>
	);
};
