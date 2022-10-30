import React from 'react';
import { Col, Layout, Row, Space } from 'antd';
import { Link } from '../../common/Link/Link';
import { PageRoutes } from '../../../routes';
import { TelegramIcon, VKIcon } from '../../../images';
import './Footer.scss';

const { Footer } = Layout;

const linkStyles = {
	color: 'rgba(0, 0, 0, 0.45)',
	fontWeight: 400,
	padding: 0,
	lineHeight: '19px',
	height: 19,
	border: 'none',
};

export const FooterBlock = () => {
	return (
		<Footer className="footer">
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
							<p className="text_default">Екатеринбург, Мира 19, 404 аудитория</p>
							<p className="text_default">+79123456780</p>
							<p className="text_default">priemka_urfu@mail.ru</p>
						</Space>
					</Space>
				</Col>
				<Col className="footer__navigation">
					<Space direction="vertical" size="large">
						<p className="text_primary">Ссылки</p>
						<Space direction="vertical" size="middle">
							<Link text="Конструктор" href={PageRoutes.CONSTRUCTOR} key={0} style={linkStyles} />
							<Link text="Профессии" href={PageRoutes.PROFESSIONS} key={1} style={linkStyles} />
							<Link text="Сотрудники" href={PageRoutes.EMPLOYEES} key={2} style={linkStyles} />
							<Link text="Партнёры" href={PageRoutes.PARTNERS} key={3} style={linkStyles} />
						</Space>
					</Space>
				</Col>
				<Col className="footer__social">
					<Space direction="vertical" size="large">
						<p className="text_primary">Мы в социальных сетях</p>
						<Space direction="vertical" size="middle">
							<Link
								text="Вконтакте"
								href="#"
								icon={<img className="footer__social__icon" src={VKIcon} alt="icon" />}
								style={linkStyles}
							/>
							<Link
								text="Telegram"
								href="#"
								icon={<img className="footer__social__icon" src={TelegramIcon} alt="icon" />}
								style={linkStyles}
							/>
						</Space>
					</Space>
				</Col>
			</Row>
		</Footer>
	);
};
