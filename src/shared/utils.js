/* eslint-disable */
import theme from '../theme';

export function getTextColor(props) {
	if (props.light) {
		return (props.theme.textLight ? props.theme.textLight : theme.textLight);
	}
	return (props.theme.textDark ? props.theme.textDark : theme.textDark);
}

export function getProperty(props, color) {
	return (props.theme[color] ? props.theme[color] : theme[color]);
}

export function shade(color, percent) {
	const f = parseInt(color.slice(1), 16);
	const t = percent < 0 ? 0 : 255;
	const p = percent < 0 ? percent * -1 : percent;
	const R = f >> 16;
	const G = (f >> 8) & 0x00ff;
	const B = f & 0x0000ff;

	return (
		'#' +
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
