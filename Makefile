all: install build

install:
	yarn install --ignore-optional --frozen-lockfile

test: install
	yarn run test

build: install
	yarn run build

start: install
	yarn run start

.PHONY: all install test build start
