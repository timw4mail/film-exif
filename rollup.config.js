import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-cpy';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'src/index.js',
	output: {
		file: 'build/bundle.js',
		format: 'es',
		sourcemap: true,
	},
	plugins: [
		copy([{
			dest: 'build/',
			files: ['public/index.html', 'public/favicon.ico'],
		}, {
			dest: 'build/css/',
			files: ['public/css/bootstrap.css', 'public/css/app.css'],
		}]),
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),
		resolve({
			jsnext: true,
			browser: true,
		}),
		babel({
			exclude: 'node_modules/**',
		}),
		commonjs(),
	],
};
