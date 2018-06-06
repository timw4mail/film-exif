import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: './src/index.js',
	output: {
		file: './build/bundle.js',
		format: 'iife',
		sourcemap: true,
	},
	plugins: [
		copy({
			'public/index.html': 'build/index.html',
			'public/favicon.ico': 'build/favicon.ico',
			'public/css/bootstrap.css': 'build/css/bootstrap.css',
			'public/css/app.css': 'build/css/app.css',
			verbose: true,
		}),
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
