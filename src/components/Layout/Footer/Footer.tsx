import React from 'react';
import { Col, Image, Layout, Row, Space } from 'antd';
import { PageRoutes } from '../../../routes';
import './Footer.scss';
import { useContactsQuery } from '../../../hooks/useContactsQuery';
import { useSocialNetworksQuery } from '../../../hooks/useSocialNetworksQuery';
import { Loader } from '../../common/Loader/Loader';
import { TitledList } from '../../common/TitledList/TitledList';
import { IconText } from '../../common/IconText/IconText';
import { LocationIcon, LogoIrit, MailIcon, PhoneIcon } from '../../../images';
import { NavLink } from 'react-router-dom';
import { reachGoal } from '../../../common/utils';

const { Footer: AntdFooter } = Layout;

export const Footer = () => {
	const { data: contacts, isFetching: contactsFetching, isLoading: contactsLoading } = useContactsQuery();
	const {
		data: socialNetworks,
		isFetching: socialNetworksFetching,
		isLoading: socialNetworksLoading,
	} = useSocialNetworksQuery();

	const loading = contactsFetching || contactsLoading || socialNetworksLoading || socialNetworksFetching;

	return (
		<AntdFooter className="footer">
			<Loader loading={loading} size="default">
				<Row gutter={{ xxl: 168, xl: 100 }} justify="center" style={{ margin: 0 }}>
					<Col className="footer__brand">
						<Space direction="vertical" size="large">
							<NavLink to="/">
								<Image src={LogoIrit} preview={false} />
							</NavLink>
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
						{socialNetworks && (
							<TitledList
								title="Мы в социальных сетях"
								titleGap={14}
								itemsGap={16}
								items={socialNetworks.map((sn) => (
									<IconText
										key={sn.name}
										icon={sn.icon}
										textElement={
											<a
												href={sn.url}
												className="text_default"
												target="_blank"
												rel="noreferrer"
												onClick={() => reachGoal(sn.name === 'Telegram' ? 'telegram' : 'vk')}
											>
												{sn.name}
											</a>
										}
										gap={8}
									/>
								))}
							/>
						)}
					</Col>
				</Row>
			</Loader>
		</AntdFooter>
	);
};
