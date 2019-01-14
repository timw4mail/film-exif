import baseConfig from './rollup.config';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
	...baseConfig,
	plugins: [
		replace({
			'process.env.NODE_ENV': "'production'",
		}),
		...baseConfig.plugins,
		copy({
			'public/index-prod.html': 'build/index.html',
			'public/favicon.ico': 'build/favicon.ico',
			'public/css/bootstrap.css': 'build/css/bootstrap.css',
			'public/css/app.css': 'build/css/app.css',
		}),
		terser(),
		filesize(),
	],
};
