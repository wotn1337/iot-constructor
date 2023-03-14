import React from 'react';
import s from './ErrorPage.module.scss';
import { Button, ButtonProps } from '../../components/common/Button/Button';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

type ErrorPageProps = {
	code?: number;
	title: string;
	subTitle?: string;
	buttonProps?: ButtonProps;
	image?: string;
	subImage?: string;
	pageTitle?: string;
};

export const ErrorPage: React.FC<ErrorPageProps> = ({
	code,
	title,
	subTitle,
	buttonProps,
	image,
	subImage,
	pageTitle,
}) => {
	const { status } = useParams();

	return (
		<>
			{pageTitle && (
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
			)}
			<div className={s.errorPage}>
				<div className={s.content}>
					<span className={s.content__code}>{status ?? code}</span>
					<span className={s.content__title}>{title}</span>
					{subTitle && <span className={s.content__subTitle}>{subTitle}</span>}
					{buttonProps && <Button {...buttonProps} classname={s.content__button} />}
				</div>
				<div className={s.imagesWrapper}>
					{image && <img src={image} alt={`${code} error`} className={s.image} />}
					{subImage && <img src={subImage} alt={`${code} error`} className={s.subImage} />}
				</div>
			</div>
		</>
	);
};
