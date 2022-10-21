import React from 'react';
import styled from 'styled-components';
import { Image } from 'antd';

type BorderProps = {
	width?: number;
	padding?: number;
	color?: string;
};

type HexagonProps = {
	size: number;
	color?: string;
	rotateAngle?: number;
	image?: string;
	border?: BorderProps;
	style?: React.CSSProperties;
};

export const Hexagon: React.FC<HexagonProps> = ({ border, rotateAngle, image, style, ...props }) => {
	const inner = image ? (
		<Image
			src={image}
			preview={false}
			style={{
				transform: `rotate(-${rotateAngle}deg)`,
				width: `${props.size * 0.7 * Math.sqrt(3)}px`,
				height: `${props.size * 0.7 * Math.sqrt(3)}px`,
			}}
		/>
	) : (
		<></>
	);

	return (
		<>
			{border ? (
				<HexagonComponent
					size={props.size + (border.padding ?? 0) + (border.width ?? 0)}
					rotateAngle={rotateAngle}
					color={border.color}
					style={{ ...style }}
				>
					<HexagonComponent color="#F0F2F5" size={props.size + (border.padding ?? 0)}>
						<HexagonComponent {...props}>{inner}</HexagonComponent>
					</HexagonComponent>
				</HexagonComponent>
			) : (
				<HexagonComponent rotateAngle={rotateAngle} style={{ ...style }} {...props}>
					{inner}
				</HexagonComponent>
			)}
		</>
	);
};

const HexagonComponent = styled.div<HexagonProps>`
	width: ${({ size }) => 2 * size}px;
	height: ${({ size }) => size * Math.sqrt(3)}px;
	background: ${({ color = 'white' }) => color};
	clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
	transform: rotate(${({ rotateAngle }) => rotateAngle}deg);
	display: flex;
	justify-content: center;
	align-items: center;
`;
