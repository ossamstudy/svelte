import { stores } from './data.js';

export const load = () => {
	return {
		stores: stores.map((store) => ({
			id: store.id,
			name: store.name,
			addr: store.addr
		}))
	};
}