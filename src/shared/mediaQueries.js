const breakpoints = {
	xs: 420,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

function queries(size) {
	return `@media all and (max-width: ${breakpoints[size]}px)`;
}

function toTitleCase(string) {
	return string.replace(
		/\w\S*/g,
		txt => txt.charAt(0).toUpperCase() + txt.substr(1),
	);
}

const sizeOrder = ['sm', 'md', 'lg', 'xl'];
const getProperty = (props, property, size) => {
	if (props[`${size}${toTitleCase(property)}`]) {
		return props[`${size}${toTitleCase(property)}`];
	} else if (size === 'xl') {
		return props[property];
	}
	const index = sizeOrder.indexOf(size);
	return getProperty(props, property, sizeOrder[index + 1]);
};

export default queries;
export { getProperty };
