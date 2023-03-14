import React, { useContext, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DesktopFooter } from './DesktopFooter/DesktopFooter';
import { MobileFooter } from './MobileFooter/MobileFooter';
import { useContactsQuery } from '../../../hooks/useContactsQuery';
import { useSocialNetworksQuery } from '../../../hooks/useSocialNetworksQuery';
import { Loader } from '../../common/Loader/Loader';
import { Layout } from 'antd';
import './Footer.scss';
import { ServerErrorContext } from '../../../providers/ServerErrorProvider';

const { Footer: AntdFooter } = Layout;

type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
	const isDesktop = useMediaQuery({ minWidth: 821 });
	const { isFetching: contactsFetching, isLoading: contactsLoading, error: contactsError } = useContactsQuery();
	const {
		isFetching: socialNetworksFetching,
		isLoading: socialNetworksLoading,
		error: socialError,
	} = useSocialNetworksQuery();
	const { setError } = useContext(ServerErrorContext);

	const loading = contactsFetching || contactsLoading || socialNetworksLoading || socialNetworksFetching;

	useEffect(() => {
		if (contactsError) {
			setError(contactsError);
		}
		if (socialError) {
			setError(socialError);
		}
	}, [contactsError, socialError]);

	return (
		<AntdFooter className="footer">
			<Loader loading={loading} size="default">
				{isDesktop ? <DesktopFooter /> : <MobileFooter />}
			</Loader>
		</AntdFooter>
	);
};
