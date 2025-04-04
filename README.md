# Nexu.sh SDK & CLI

<div align="center">

[![npm version](https://img.shields.io/npm/v/@nexu-ai/cli.svg?style=flat-square)](https://www.npmjs.com/package/@nexu-ai/cli)
[![npm downloads](https://img.shields.io/npm/dm/@nexu-ai/cli.svg?style=flat-square)](https://www.npmjs.com/package/@nexu-ai/cli)
[![License](https://img.shields.io/npm/l/@nexu-ai/cli.svg?style=flat-square)](https://github.com/nexu-ai/node-sdk/blob/main/LICENSE)
[![Twitter](https://img.shields.io/twitter/follow/nexu_ai?style=social)](https://twitter.com/nexu_ai)

</div>

Nexu.sh provides a command-line interface (CLI) and underlying SDK core libraries to automate the deployment and management of AI agents and related backend infrastructure, primarily on AWS.

## Core Features

This project aims to simplify the workflow for developers working with specific AI agent architectures and MCP (Model Context Protocol) servers through the following capabilities:

*   **Template-Based Deployment (`nexu deploy`)**: Automates the provisioning of cloud infrastructure (e.g., AWS Lambda, CloudFormation stacks) based on pre-defined templates. This allows for consistent and rapid setup of common agent patterns.
    ```bash
    nexu deploy --template chatbot-rag --name my-agent-stack
    ```
*   **Deployment Status Monitoring (`nexu status`)**: Retrieves the current status and relevant details of a deployed stack using the `@nexu-ai/core` library's `getDeploymentStatus` method. It provides information such as stack status (e.g., `CREATE_COMPLETE`, `UPDATE_IN_PROGRESS`), creation/update timestamps, and output URLs (like API endpoints) when available.
    ```bash
    nexu status --name my-agent-stack
    ```
*   **AWS Configuration (`nexu config`)**: Assists in setting up local AWS credentials and region configurations necessary for the SDK to interact with AWS services.
    ```bash
    nexu config --profile default --region us-east-1
    ```
*   **Pre-configured Templates (`@nexu-ai/templates`)**: Offers ready-to-use templates for common use cases (e.g., RAG Chatbot, Customer Service Assistant) as a starting point for deployments. See the [Available Templates](#available-templates) section.
*   **MCP Hub Integration (`@nexu-ai/mcp-hub`)**: Provides utilities or integration points for interacting with Model Context Protocol Hub servers (details specific to MCP Hub architecture).

## Available Templates

The following templates are currently available for use with the `deploy` command:

1.  `chatbot-rag`: Deploys a Retrieval-Augmented Generation chatbot architecture.
2.  `customer-service-assistant`: Sets up a basic customer service agent.
3.  `document-processor`: Infrastructure for an agent focused on document processing.
4.  `sales-marketing-assistant`: Template for a sales/marketing focused assistant.
5.  `data-analysis-agent`: Basic setup for a data analysis agent.

## Installation (CLI)

```bash
npm install -g @nexu-ai/cli
```

## Project Architecture (Monorepo)

This repository uses pnpm workspaces and Turborepo to manage the following packages:

-   `@nexu-ai/cli`: The command-line interface tool (`nexu`).
-   `@nexu-ai/core`: Core SDK logic for deployment, status checks, and AWS interactions.
-   `@nexu-ai/shared`: Shared TypeScript types, interfaces, and utility functions used across packages.
-   `@nexu-ai/templates`: Contains the definitions and potentially the code for the deployable templates.
-   `@nexu-ai/mcp-hub`: Code related to MCP Hub integration.

## Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/nexu-ai/node-sdk.git
cd node-sdk

# 2. Install dependencies (using pnpm and Makefile)
make install

# 3. Build all packages (using Makefile which invokes Turbo)
make build

# 4. Run packages in watch mode (using Turbo)
# Example: Run the CLI package in watch mode
pnpm turbo run dev --filter=@nexu-ai/cli
```

## Contributing

Contributions are welcome! Please read our [contribution guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Community

-   [Twitter](https://twitter.com/nexu_ai)
-   [Discord](https://discord.gg/nexu)
-   [Documentation](https://docs.nexu.sh)
-   [Author](https://github.com/nicolascine) - Nicolás Silva
