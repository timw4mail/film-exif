import baseConfig from './rollup.config';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

export default {
	...baseConfig,
	plugins: [
		replace({
			'process.env.NODE_ENV': "'production'",
		}),
		...baseConfig.plugins,
		terser(),
		filesize(),
	],
};
