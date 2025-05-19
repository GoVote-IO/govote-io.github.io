# GoVote-IO Website Makefile

.PHONY: help install start build serve test lint lint-md lint-commit clean

# Default target when running make without arguments
help:
	@echo "Available commands:"
	@echo "  make install     - Install dependencies"
	@echo "  make start       - Start development server"
	@echo "  make build       - Build production version"
	@echo "  make serve       - Serve production build locally"
	@echo "  make test        - Run tests"
	@echo "  make lint        - Run all linters"
	@echo "  make lint-md     - Run markdownlint"
	@echo "  make lint-commit - Validate commit message format"
	@echo "  make clean       - Clean build artifacts"

# Install dependencies
install:
	npm install
	npm install --save-dev markdownlint-cli @commitlint/cli @commitlint/config-conventional eslint

# Start development server
start:
	npm run start

# Build production version
build:
	npm run build

# Serve production build locally
serve:
	npm run serve

# Run tests
test:
	npm run test

# Run all linters
lint: lint-md lint-commit
	npm run typecheck
	npx eslint .

# Run markdownlint
lint-md:
	npx markdownlint '**/*.md' --ignore node_modules

# Validate commit message format
lint-commit:
	@if [ -f PR_MESSAGE.md ]; then \
		cat PR_MESSAGE.md | npx commitlint; \
	else \
		echo "No PR_MESSAGE.md file found. Skipping commit lint."; \
	fi

# Clean build artifacts
clean:
	npm run clear
	rm -rf build