import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { ChildProcess } from 'child_process';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

let rev = readFileSync('.git/HEAD').toString().trim();
if (rev.indexOf(':') === -1) {
} else {
	rev = readFileSync('.git/' + rev.substring(5))
		.toString()
		.trim();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ out: 'build' }),
		vite: {
			define: {
				__APP_VERSION__: JSON.stringify(pkg.version),
				__COMMIT_HASH__: JSON.stringify(rev)
			}
		}
	}
};

export default config;
