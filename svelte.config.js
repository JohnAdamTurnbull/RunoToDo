import adapter from '@sveltejs/adapter-auto';
import vercel from "@sveltejs/adapter-vercel";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	}
};

export default config;