import React from 'react';
import s from './BackgroundWrapper.module.scss';

type BackgroundWrapperProps = {
	children: React.ReactNode;
};

export const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
	return <section className={s.wrapper}>{children}</section>;
};
