# Contribution Guide

Thank you for your interest in contributing to Nexu.sh! This document will guide you through the contribution process.

## 🎯 How to Contribute

1. **Reporting Bugs**
   - Use the [issue tracker](https://github.com/nexu-ai/node-sdk/issues) to report bugs.
   - Ensure the bug has not already been reported.
   - Include a descriptive title and a clear description of the problem.
   - If possible, include a code example that reproduces the issue.

2. **Suggesting Enhancements**
   - Use the [issue tracker](https://github.com/nexu-ai/node-sdk/issues) to suggest enhancements.
   - Describe the enhancement and why you think it would be useful.
   - If possible, include examples of how it would work.

3. **Submitting Pull Requests**
   - Fork the repository.
   - Create a feature branch (`git checkout -b feature/AmazingFeature`).
   - Commit your changes (`git commit -m 'Add some AmazingFeature'`).
   - Push to the branch (`git push origin feature/AmazingFeature`).
   - Open a Pull Request.

## 🛠️ Development Environment Setup

1. **Prerequisites**
   - Node.js >= 18.0.0
   - pnpm >= 8.0.0
   - Git
   - Make (optional, for using Makefile commands)

2. **Installation**
   ```bash
   # Clone the repository
   git clone https://github.com/nexu-ai/node-sdk.git
   cd node-sdk

   # Install dependencies (using Makefile)
   make install
   ```

3. **Build**
   ```bash
   # Build all packages (using Makefile and Turbo)
   make build
   ```

4. **Development Watch Mode**
   ```bash
   # Run packages in watch mode (using Turbo)
   # Example: Run the CLI package in watch mode
   pnpm turbo run dev --filter=@nexu-ai/cli
   ```

## 📝 Code Conventions

- We use TypeScript for all code.
- We follow [Conventional Commits](https://www.conventionalcommits.org/).
- Maintain high test coverage.
- Document all public APIs.

## 🧪 Testing

- Write tests for all new features.
- Ensure all tests pass before submitting a PR.
- Use `pnpm test` (or `pnpm turbo run test`) to run tests.

## 📚 Documentation

- Update documentation to reflect any API changes.
- Keep code comments up-to-date.
- Ensure examples in the README work.

## 🤝 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE). 