import React from 'react';
import s from './ErrorPage.module.scss';
import { Button, ButtonProps } from '../../components/common/Button/Button';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';

type ErrorPageProps = {
	code?: number;
	title: string;
	subTitle?: string;
	buttonProps?: ButtonProps;
	image?: string;
	subImage?: string;
	pageTitle?: string;
	textStyle?: React.CSSProperties;
	backgroundImage?: string;
};

export const ErrorPage: React.FC<ErrorPageProps> = ({
	code,
	title,
	subTitle,
	buttonProps,
	image,
	subImage,
	pageTitle,
	backgroundImage,
	textStyle,
}) => {
	const { status } = useParams();
	const isLarge = useMediaQuery({ minWidth: 821 });

	return (
		<>
			{pageTitle && (
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
			)}
			<div
				className={s.errorPageWrapper}
				style={{ backgroundImage: isLarge && backgroundImage ? `url(${backgroundImage})` : undefined }}
			>
				<div className={s.errorPage}>
					<div className={s.content}>
						<span className={s.content__code} style={textStyle}>
							{status ?? code}
						</span>
						<span className={s.content__title} style={textStyle}>
							{title}
						</span>
						{subTitle && <span className={s.content__subTitle}>{subTitle}</span>}
						{buttonProps && isLarge && <Button {...buttonProps} classname={s.content__button} />}
					</div>
					<div className={s.imagesWrapper}>
						{image && <img src={image} alt={`${code} error`} className={s.image} />}
						{subImage && isLarge && <img src={subImage} alt={`${code} error`} className={s.subImage} />}
					</div>
					{buttonProps && !isLarge && <Button {...buttonProps} classname={s.content__button} />}
				</div>
			</div>
		</>
	);
};
