export const lightenDarkenColor = (color: string, amt: number) => {
	let usePound = false;
	if (color[0] === '#') {
		color = color.slice(1);
		usePound = true;
	}

	const num = parseInt(color, 16);
	let r = (num >> 16) + amt;
	if (r > 255) {
		r = 255;
	} else if (r < 0) {
		r = 0;
	}

	let b = ((num >> 8) & 0x00ff) + amt;
	if (b > 255) {
		b = 255;
	} else if (b < 0) {
		b = 0;
	}

	let g = (num & 0x0000ff) + amt;
	if (g > 255) {
		g = 255;
	} else if (g < 0) {
		g = 0;
	}

	return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

export const hexToRGB = (hex: string, alpha: number) => {
	const r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16);

	return `rgba(${r}, ${g}, ${b}${alpha ? `, ${alpha}` : ''})`;
};
