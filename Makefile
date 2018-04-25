all: node_modules

clean:
	rm -rf ./node_modules
	rm -rf ./dist
	rm -rf ./build

node_modules:
	yarn --ignore-engines

fix: node_modules
	yarn fix

.PHONY: all clean fix
