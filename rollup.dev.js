import baseConfig from './rollup.config';

import alias from 'rollup-plugin-alias';
import filesize from 'rollup-plugin-filesize';
import fs from 'fs';
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
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Security-Policy': "default-src 'none'; script-src 'self' localhost:35729 localhost:65432; connect-src 'self' wss://localhost:35729 ws://localhost:65432; img-src 'self' data://*; style-src 'self';",
			},
			historyApiFallback: true,
			host: 'localhost',
			https: {
				ca: fs.readFileSync('./assets/certs/rootCA.pem'),
				cert: fs.readFileSync('./assets/certs/localhost+2.pem'),
				key: fs.readFileSync('./assets/certs/localhost+2-key.pem'),
			},
			port: 3000,
		}),
		livereload({
			https: {
				ca: fs.readFileSync('./assets/certs/rootCA.pem'),
				cert: fs.readFileSync('./assets/certs/localhost+2.pem'),
				key: fs.readFileSync('./assets/certs/localhost+2-key.pem'),
			},
			watch: 'dist',
		}),
		visualizer({
			filename: './public/stats.html',
			title: 'Film EXIF modules',
		}),
	],
};
