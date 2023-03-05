import React from 'react';
import { ProfessionType } from '../../types';
import './Profession.scss';
import { SalaryChart } from '../../SalaryChart/SalaryChart';

type ProfessionProps = ProfessionType;

export const Profession: React.FC<ProfessionProps> = ({ title, description, salary, image }) => {
	return (
		<section className="profession">
			<div className="profession__image-wrapper">
				<img src={image} alt={title} className="image" />
				<div className="image-background" />
			</div>
			<span className="profession__title">{title}</span>
			<p className="profession__description">{description}</p>
			<SalaryChart salary={salary} />
		</section>
	);
};
