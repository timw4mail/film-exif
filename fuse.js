// eslint-disable-no-shadow
const { FuseBox, WebIndexPlugin, SVGPlugin, QuantumPlugin } = require('fuse-box');
const { src, task, context } = require('fuse-box/sparky');
const infernoTransformer = require('ts-transform-inferno').default;

context(class {
	getConfig () {
		return FuseBox.init({
			homeDir: 'src',
			output: 'build/$name.js',
			plugins: [
				SVGPlugin(),
				WebIndexPlugin({
					template: 'public/index.html',
				}),
				this.isProduction && QuantumPlugin({
					bakeApiIntoBundle: 'bundle',
					uglify: true,
				}),
			],
			sourceMaps: true,
			target: 'electron',
			transformers: {
				before: [infernoTransformer()],
			},
			useJsNext: true,
			useTypescriptCompiler: true,
		});
	}
	createBundle (fuse) {
		const app = fuse.bundle('bundle');
		if (!this.isProduction) {
			app.watch();
			app.hmr();
		}
		app.instructions('> index.js');
		return app;
	}
});

task('clean', () => src('build').clean('build').exec());

task('default', ['clean'], async context => {
	const fuse = context.getConfig();
	fuse.dev();
	context.createBundle(fuse);
	await fuse.run();
});

task('dist', ['clean'], async context => {
	context.isProduction = true;
	const fuse =  context.getConfig();
	context.createBundle(fuse);
	await fuse.run();
});
