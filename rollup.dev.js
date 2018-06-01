import baseConfig from './rollup.config';

import alias from 'rollup-plugin-alias';
import filesize from 'rollup-plugin-filesize';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

// Force the appropriate environment
process.env.NODE_ENV = 'development';

export default {
	...baseConfig,
	plugins: [
		alias({
			'inferno': `${__dirname}/node_modules/inferno/dist/index.dev.esm.js`,
		}),
		...baseConfig.plugins,
		filesize(),
		serve({
			contentBase: ['./public', './build'],
			host: 'localhost',
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			historyApiFallback: true,
			port: 3000,
		}),
		livereload(),
	],
};
