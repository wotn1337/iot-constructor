import React from 'react';
import { Col, Layout, Row, Space } from 'antd';
import { Link } from '../../common/Link/Link';
import { PageRoutes } from '../../../routes';
import './Footer.scss';
import { useContacts } from '../../../hooks/useContacts';
import { useSocialNetworks } from '../../../hooks/useSocialNetworks';
import { Loader } from '../../common/Loader/Loader';

const { Footer: AntdFooter } = Layout;

const linkStyles = {
	color: 'rgba(0, 0, 0, 0.45)',
	fontWeight: 400,
	padding: 0,
	lineHeight: '19px',
	height: 19,
	border: 'none',
};

export const Footer = ({ ...props }) => {
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
						<Space direction="vertical" size="large">
							<p className="text_primary">Контакты приёмной комисси</p>
							<Space direction="vertical" size="middle">
								<p className="text_default">{contacts?.address}</p>
								<p className="text_default">{contacts?.phone_number}</p>
								<p className="text_default">{contacts?.email}</p>
							</Space>
						</Space>
					</Col>
					<Col className="footer__navigation">
						<Space direction="vertical" size="large">
							<p className="text_primary">Ссылки</p>
							<Space direction="vertical" size="middle">
								<Link
									text="Конструктор"
									href={PageRoutes.CONSTRUCTOR}
									key={PageRoutes.CONSTRUCTOR}
									style={linkStyles}
								/>
								<Link
									text="Профессии"
									href={PageRoutes.PROFESSIONS}
									key={PageRoutes.PROFESSIONS}
									style={linkStyles}
								/>
								<Link
									text="Сотрудники"
									href={PageRoutes.EMPLOYEES}
									key={PageRoutes.EMPLOYEES}
									style={linkStyles}
								/>
								<Link
									text="Партнёры"
									href={PageRoutes.PARTNERS}
									key={PageRoutes.PARTNERS}
									style={linkStyles}
								/>
							</Space>
						</Space>
					</Col>
					<Col className="footer__social">
						<Space direction="vertical" size="large">
							<p className="text_primary">Мы в социальных сетях</p>
							<Space direction="vertical" size="middle">
								{socialNetworks.map((item) => (
									<Link
										text={item.name}
										href={item.url}
										icon={<img className="footer__social__icon" src={item.icon} alt="icon" />}
										target="_blank"
										style={linkStyles}
									/>
								))}
							</Space>
						</Space>
					</Col>
				</Row>
			</Loader>
		</AntdFooter>
	);
};
