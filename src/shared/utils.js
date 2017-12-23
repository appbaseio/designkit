const evalColor = (props) => {
	return props.light ?
		(props.theme.textLight ? props.theme.textLight: theme.textLight) :
		(props.theme.textDark ? props.theme.textDark: theme.textDark);
};

const evalColorType = (props, color) => {
	return props.theme[color] ? props.theme[color] : theme[color];
}

export default function shade(color, percent) {
	const f = parseInt(color.slice(1), 16),
		t = percent < 0 ? 0 : 255,
		p = percent < 0 ? percent * -1 : percent,
		R = f >> 16,
		G = (f >> 8) & 0x00ff,
		B = f & 0x0000ff;

	return (
		"#" +
		(
			0x1000000 +
			(Math.round((t - R) * p) + R) * 0x10000 +
			(Math.round((t - G) * p) + G) * 0x100 +
			(Math.round((t - B) * p) + B)
		)
			.toString(16)
			.slice(1)
	);
}

export { evalColor, evalColorType };
