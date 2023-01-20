import React from 'react';
import { Employee } from '../types';
import { AudienceIcon, AvatarPlaceholder, LocationIcon, MailIcon, PhoneIcon, VKIcon } from '../../../images';
import { IconText } from '../../common/IconText/IconText';
import s from './EmployeeCard.module.scss';
import { Space } from 'antd';
import { useMediaQuery } from 'react-responsive';

type EmployeeCardProps = Employee;

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
	full_name,
	additional_information,
	photo,
	audience,
	email,
	address,
	vk_profile,
	phone_number,
}) => {
	const isDesktop = useMediaQuery({ minWidth: 500 });

	return (
		<div className={s.employeeCard}>
			<Space size={isDesktop ? 40 : 12} direction="vertical">
				<div className={s.employeeCard__mainInfo}>
					<img
						src={photo ?? AvatarPlaceholder}
						alt={full_name}
						width={150}
						height={150}
						className={s.employeeCard__avatar}
					/>
					<span className={s.employeeCard__name}>{full_name}</span>
					<p className={s.employeeCard__info}>{additional_information}</p>
				</div>
				<div className={s.employeeCard__contacts}>
					{address && <IconText icon={LocationIcon} textElement={address} iconSize={isDesktop ? 20 : 15} />}
					{audience && <IconText icon={AudienceIcon} textElement={audience} iconSize={isDesktop ? 20 : 15} />}
					{email && (
						<IconText
							icon={MailIcon}
							textElement={
								<a href={`mailto:${email}`} className={s.contacts__link}>
									{email}
								</a>
							}
							iconSize={isDesktop ? 20 : 15}
						/>
					)}
					{phone_number && (
						<IconText
							icon={PhoneIcon}
							textElement={
								<a href={`tel:${phone_number}`} className={s.contacts__link}>
									{phone_number}
								</a>
							}
							iconSize={isDesktop ? 20 : 15}
						/>
					)}
				</div>
			</Space>
			{vk_profile && (
				<a href={vk_profile} target="_blank" rel="noreferrer" className={s.employeeCard__vk}>
					<img src={VKIcon} alt="ВКонтакте" className={s.employeeCard__vk__icon} width={23} height={23} />
				</a>
			)}
		</div>
	);
};
