import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { DesktopFooter } from './DesktopFooter/DesktopFooter';
import { MobileFooter } from './MobileFooter/MobileFooter';
import { useContactsQuery } from '../../../hooks/useContactsQuery';
import { useSocialNetworksQuery } from '../../../hooks/useSocialNetworksQuery';
import { Loader } from '../../common/Loader/Loader';
import { Layout } from 'antd';
import './Footer.scss';

const { Footer: AntdFooter } = Layout;

type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
	const isDesktop = useMediaQuery({ minWidth: 820 });
	const { isFetching: contactsFetching, isLoading: contactsLoading } = useContactsQuery();
	const { isFetching: socialNetworksFetching, isLoading: socialNetworksLoading } = useSocialNetworksQuery();

	const loading = contactsFetching || contactsLoading || socialNetworksLoading || socialNetworksFetching;

	return (
		<AntdFooter className="footer">
			<Loader loading={loading} size="default">
				{isDesktop ? <DesktopFooter /> : <MobileFooter />}
			</Loader>
		</AntdFooter>
	);
};
