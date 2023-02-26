import Product from './product.svelte';

export const load = async (loadEvent) => {
	console.log('Load function called in page.js');
	const { fetch, data } = loadEvent;

	return {
		...data,
		Component: Product
	};
};
