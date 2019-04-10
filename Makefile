NPM     = yarn

all: install build start

install:
	$(NPM) install --ignore-optional --frozen-lockfile

test: install
	$(NPM) run test

build: install
	$(NPM) build

start: install
	$(NPM) run start

.PHONY: all install test build start
