import React from 'react';
import { IntroImage } from '../../../images';
import { Hexagon } from '../../../components';

type AboutProps = {};

export const About: React.FC<AboutProps> = () => {
	return (
		<section>
			<Hexagon
				size={550 / Math.sqrt(3)}
				color="white"
				rotateAngle={44.14}
				border={{ width: 1, color: '#D9D9D9', padding: 66.5 }}
				image={IntroImage}
			/>
		</section>
	);
};
