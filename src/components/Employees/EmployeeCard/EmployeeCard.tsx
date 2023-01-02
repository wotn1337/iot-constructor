import React from 'react';
import { Employee } from '../types';
import { AudienceIcon, AvatarPlaceholder, LocationIcon, MailIcon, PhoneIcon } from '../../../images';
import { IconText } from '../../common/IconText/IconText';
import s from './EmployeeCard.module.scss';
import { Space } from 'antd';
import { useMediaQuery } from 'react-responsive';

type EmployeeCardProps = Employee;

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, info, avatar, contacts, vk }) => {
	const isDesktop = useMediaQuery({ minWidth: 500 });
	const { address, audience, email, phone } = contacts;

	return (
		<div className={s.employeeCard}>
			<Space size={isDesktop ? 40 : 12} direction="vertical">
				<div className={s.employeeCard__mainInfo}>
					<img
						src={avatar ?? AvatarPlaceholder}
						alt={name}
						width={150}
						height={150}
						className={s.employeeCard__avatar}
					/>
					<span className={s.employeeCard__name}>{name}</span>
					<p className={s.employeeCard__info}>{info}</p>
				</div>
				<div className={s.employeeCard__contacts}>
					{address && <IconText icon={LocationIcon} textElement={address} iconSize={isDesktop ? 20 : 15} />}
					{audience && <IconText icon={AudienceIcon} textElement={audience} iconSize={isDesktop ? 20 : 15} />}
					{email && <IconText icon={MailIcon} textElement={email} iconSize={isDesktop ? 20 : 15} />}
					{phone && <IconText icon={PhoneIcon} textElement={phone} iconSize={isDesktop ? 20 : 15} />}
				</div>
			</Space>
			{vk && (
				<a href={vk.url} target="_blank" rel="noreferrer" className={s.employeeCard__vk}>
					<img src={vk.icon} alt={vk.name} className={s.employeeCard__vk__icon} width={23} height={23} />
				</a>
			)}
		</div>
	);
};
