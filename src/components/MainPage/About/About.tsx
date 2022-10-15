import React from 'react';
import { Hexagon } from '../../common/Hexagon/Hexagon';
import { IntroImage } from '../../../images';

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
