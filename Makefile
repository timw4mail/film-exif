all: node_modules

clean:
	rm -rf ./.cache
	rm -rf ./node_modules
	rm -rf ./dist
	rm -rf ./build

node_modules:
	yarn --ignore-engines

electron-start: node_modules
	yarn electron-start

react-start: node_modules
	yarn react-start

fix: node_modules
	yarn fix

.PHONY: all clean fix electron-start react-start
