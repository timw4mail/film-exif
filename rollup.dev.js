import baseConfig from './rollup.config';

import alias from 'rollup-plugin-alias';
import filesize from 'rollup-plugin-filesize';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import visualizer from 'rollup-plugin-visualizer';

export default {
	...baseConfig,
	plugins: [
		alias({
			'inferno': `${__dirname}/node_modules/inferno/dist/index.dev.esm.js`,
		}),
		replace({
			'process.env.NODE_ENV': "'development'",
		}),
		...baseConfig.plugins,
		filesize(),
		serve({
			contentBase: ['build', 'public'],
			host: 'localhost',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Security-Policy': "default-src 'none'; script-src 'self' localhost:35729 localhost:65432; connect-src 'self' ws://localhost:35729 ws://localhost:65432; img-src 'self' data://*; style-src 'self';",
			},
			historyApiFallback: true,
			port: 3000,
		}),
		livereload(),
		visualizer({
			filename: './public/stats.html',
			title: 'Film EXIF modules',
		}),
	],
};
