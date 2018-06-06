import baseConfig from './rollup.config';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

export default {
	...baseConfig,
	plugins: [
		...baseConfig.plugins,
		terser(),
		filesize(),
	],
};
