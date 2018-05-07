all: node_modules

build: node_modules
	yarn dist

clean:
	rm -rf ./.cache
	rm -rf ./dist
	rm -rf ./build

clean-all: clean
	rm -rf ./node_modules

node_modules:
	yarn --ignore-engines

electron-start: node_modules
	yarn electron-start

inferno-start: node_modules
	yarn inferno-start

react-start: node_modules
	yarn inferno-start

fix: node_modules
	yarn fix

.PHONY: all clean fix electron-start react-start
