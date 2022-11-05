import React from 'react';

type ConstructorProps = {};

export const Constructor: React.FC<ConstructorProps> = ({ ...props }) => {
	return <h2>Конструктор</h2>;
};