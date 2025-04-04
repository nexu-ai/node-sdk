# Variables
PACKAGES = shared core templates mcp-hub cli
VERSION ?= patch # patch, minor, major
NPM_REGISTRY ?= https://registry.npmjs.org/

# Colors for output
GREEN = \033[0;32m
YELLOW = \033[0;33m
RED = \033[0;31m
NC = \033[0m # No Color

.PHONY: all install build test clean publish version help

# Main commands
all: build

# Install dependencies (only if node_modules doesn't exist)
install:
	@if [ ! -d "node_modules" ]; then \
		echo "$(YELLOW)Installing dependencies...$(NC)"; \
		pnpm install --no-frozen-lockfile; \
	else \
		echo "$(GREEN)Dependencies already installed.$(NC)"; \
	fi

# Build all packages
build: install
	@echo "$(YELLOW)Building packages...$(NC)"
	pnpm turbo run build

# Clean generated files
clean:
	@echo "$(YELLOW)Cleaning generated files...$(NC)"
	rm -rf packages/*/dist
	rm -rf packages/*/*.tsbuildinfo
	rm -rf .turbo

# Publish all packages in order
publish: build
	@echo "$(YELLOW)Publishing packages...$(NC)"
	@for pkg in $(PACKAGES); do \
		echo "$(GREEN)Publishing @nexu-ai/$$pkg...$(NC)"; \
		cd packages/$$pkg && npm publish --registry $(NPM_REGISTRY) && cd ../..; \
	done

# Increment version for all packages
version:
	@echo "$(YELLOW)Incrementing version...$(NC)"
	@for pkg in $(PACKAGES); do \
		echo "$(GREEN)Updating version for @nexu-ai/$$pkg...$(NC)"; \
		cd packages/$$pkg && npm version $(VERSION) --no-git-tag-version && cd ../..; \
	done
	@echo "$(GREEN)Versions updated. Don't forget to commit the changes.$(NC)"

# Update dependencies between packages
update-deps:
	@echo "$(YELLOW)Updating dependencies...$(NC)"
	@for pkg in $(PACKAGES); do \
		echo "$(GREEN)Updating dependencies for @nexu-ai/$$pkg...$(NC)"; \
		cd packages/$$pkg && \
		for dep in $(PACKAGES); do \
			if [ "$$pkg" != "$$dep" ]; then \
				sed -i '' "s/\"@nexu-ai\/$$dep\": \".*\"/\"@nexu-ai\/$$dep\": \"$$(node -p "require('./package.json').version")\"/" package.json; \
			fi \
		done && \
		cd ../..; \
	done

# Local development command
dev:
	@echo "$(YELLOW)Starting development mode...$(NC)"
	pnpm dev

# Help
help:
	@echo "$(GREEN)Available commands:$(NC)"
	@echo "  make install     - Install dependencies (only if needed)"
	@echo "  make build      - Build all packages"
	@echo "  make clean      - Clean generated files"
	@echo "  make publish    - Publish all packages"
	@echo "  make version    - Increment version for all packages"
	@echo "  make update-deps - Update dependencies between packages"
	@echo "  make dev        - Start development mode"
	@echo ""
	@echo "$(YELLOW)Variables:$(NC)"
	@echo "  VERSION         - Version increment type (patch, minor, major)"
	@echo "  NPM_REGISTRY    - NPM registry to use"
	@echo ""
	@echo "$(YELLOW)Examples:$(NC)"
	@echo "  make version VERSION=minor"
	@echo "  make publish NPM_REGISTRY=https://registry.npmjs.org/" 