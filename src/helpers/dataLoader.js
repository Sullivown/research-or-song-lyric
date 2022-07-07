function dataLoader(data) {
	return data.map((question) => ({
		...question,
		answered: null,
	}));
}

export default dataLoader;
