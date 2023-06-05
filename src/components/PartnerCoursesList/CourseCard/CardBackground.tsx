import React from 'react';

type CardBackgroundProps = {
	darkColor: string;
};

export const CardBackground: React.FC<CardBackgroundProps> = ({ darkColor }) => {
	const randomNum = Math.round(Math.random());

	return (
		<div style={{ position: 'absolute' }}>
			{randomNum ? (
				<svg width="289" height="260" viewBox="0 0 289 260" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						opacity="0.5"
						d="M180.36 31.4609V51.6409L197.83 61.7209L215.3 51.6409V31.4609L197.83 21.3809L180.36 31.4609Z"
						stroke={darkColor}
						strokeMiterlimit="10"
					/>
					<path
						opacity="0.8"
						d="M271.12 205.42H259.04L253 215.88L259.04 226.34H271.12L277.16 215.88L271.12 205.42Z"
						stroke={darkColor}
						strokeMiterlimit="10"
					/>
					<path
						opacity="0.8"
						d="M159.63 8.67969H149.72L144.76 17.2597L149.72 25.8497H159.63L164.59 17.2597L159.63 8.67969Z"
						stroke={darkColor}
						strokeMiterlimit="10"
					/>
					<mask
						id="mask0_2169_8416"
						type="mask-type:luminance"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="289"
						height="260"
					>
						<path d="M289 0H0V260H289V0Z" fill="white" />
					</mask>
					<g mask="url(#mask0_2169_8416)">
						<path
							opacity="0.4"
							d="M292.76 -12.6699H258.2L240.91 17.2601L258.2 47.2001H292.76L310.04 17.2601L292.76 -12.6699Z"
							stroke={darkColor}
							strokeMiterlimit="10"
						/>
						<path
							opacity="0.4"
							d="M225.95 248.181V265.461L240.91 274.111L255.88 265.461V248.181L240.91 239.541L225.95 248.181Z"
							stroke={darkColor}
							strokeMiterlimit="10"
						/>
					</g>
				</svg>
			) : (
				<svg width="289" height="260" viewBox="0 0 289 260" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						opacity="0.5"
						d="M251.73 26.9102H237.24L229.99 39.4702L237.24 52.0202H251.73L258.98 39.4702L251.73 26.9102Z"
						stroke={darkColor}
						strokeMiterlimit="10"
					/>
					<path
						opacity="0.8"
						d="M254.15 86.9499V96.0199L262 100.55L269.85 96.0199V86.9499L262 82.4199L254.15 86.9499Z"
						stroke={darkColor}
						strokeMiterlimit="10"
					/>
					<path
						opacity="0.8"
						d="M226 188.55V199.8L235.74 205.43L245.49 199.8V188.55L235.74 182.92L226 188.55Z"
						stroke={darkColor}
						strokeMiterlimit="10"
					/>
					<mask
						id="mask0_2171_7983"
						type="mask-type:luminance"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="289"
						height="260"
					>
						<path d="M289 0H0V260H289V0Z" fill="white" />
					</mask>
					<g mask="url(#mask0_2171_7983)">
						<path
							opacity="0.4"
							d="M186.14 -23.1191H159.44L146.09 0.000860214L159.44 23.1209H186.14L199.49 0.000860214L186.14 -23.1191Z"
							stroke={darkColor}
							strokeMiterlimit="10"
						/>
						<path
							opacity="0.4"
							d="M270.77 205.362V226.412L289 236.942L307.23 226.412V205.362L289 194.842L270.77 205.362Z"
							stroke={darkColor}
							strokeMiterlimit="10"
						/>
						<path
							opacity="0.4"
							d="M208.86 245.762H187.81L177.28 263.992L187.81 282.222H208.86L219.39 263.992L208.86 245.762Z"
							stroke={darkColor}
							strokeMiterlimit="10"
						/>
					</g>
				</svg>
			)}
		</div>
	);
};
