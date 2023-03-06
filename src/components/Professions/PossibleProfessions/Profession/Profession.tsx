import React, { useEffect, useState } from 'react';
import { ProfessionType } from '../../types';
import './Profession.scss';
import { SalaryChart } from '../../SalaryChart/SalaryChart';
import { animated, useSpring } from '@react-spring/web';

type ProfessionProps = { profession: ProfessionType };

export const Profession: React.FC<ProfessionProps> = (props) => {
	const [textStyle, textApi] = useSpring(() => ({ from: { x: 0 } }));
	const [imageStyle, imageApi] = useSpring(() => ({ from: { opacity: 0 } }));
	const [salaryStyle, salaryApi] = useSpring(() => ({ from: { y: 0 } }));
	const [{ title, description, salary, image }, setProfession] = useState(props.profession);

	const startAnimation = () => {
		textApi.start({
			from: { x: 0 },
			to: async (next) => {
				await next({ x: 700 });
				setProfession(props.profession);
				await next({ x: 0 });
			},
		});
		imageApi.start({
			from: { opacity: 1 },
			to: async (next) => {
				await next({ opacity: 0 });
				await next({ opacity: 1 });
			},
		});
		salaryApi.start({
			from: { y: 0 },
			to: async (next) => {
				await next({ y: 200 });
				await next({ y: 0 });
			},
		});
	};

	useEffect(() => {
		startAnimation();
	}, [props.profession]);

	return (
		<section className="profession">
			<div className="profession__image-wrapper">
				<animated.div style={{ ...imageStyle }} className="image">
					<img src={image} alt={title} className="image" />
				</animated.div>
				<div className="image-background" />
			</div>
			<animated.div style={{ ...textStyle }}>
				<span className="profession__title">{title}</span>
			</animated.div>
			<animated.div style={{ ...textStyle }}>
				<p className="profession__description">{description}</p>
			</animated.div>
			<animated.div style={{ ...salaryStyle }}>
				<SalaryChart salary={salary} />
			</animated.div>
		</section>
	);
};
