all: node_modules

build: node_modules
	yarn dist

clean:
	rm -rf ./.cache
	rm -rf ./dist
	rm -rf ./build

clean-all: clean
	rm -rf ./node_modules

electron-start: node_modules
	yarn electron-start

fix: node_modules
	yarn fix

inferno-start: node_modules
	yarn inferno-start

lint: node_modules
	yarn lint

node_modules:
	yarn --ignore-engines

react-start: node_modules
	yarn inferno-start

.PHONY: all clean electron-start fix lint react-start
