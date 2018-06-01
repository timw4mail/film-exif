import baseConfig from './rollup.config';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

// Force the appropriate environment
process.env.NODE_ENV = 'production';

export default {
	...baseConfig,
	plugins: [
		...baseConfig.plugins,
		terser(),
		filesize(),
	],
};
