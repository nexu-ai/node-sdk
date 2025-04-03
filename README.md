# Nexu.sh CLI

<div align="center">

[![npm version](https://img.shields.io/npm/v/@nexu-ai/cli.svg?style=flat-square)](https://www.npmjs.com/package/@nexu-ai/cli)
[![npm downloads](https://img.shields.io/npm/dm/@nexu-ai/cli.svg?style=flat-square)](https://www.npmjs.com/package/@nexu-ai/cli)
[![License](https://img.shields.io/npm/l/@nexu-ai/cli.svg?style=flat-square)](https://github.com/nexu-ai/cli/blob/main/LICENSE)
[![Twitter](https://img.shields.io/twitter/follow/nexu_ai?style=social)](https://twitter.com/nexu_ai)

</div>

## 🚀 La Plataforma para Agentes de IA en LATAM

Nexu.sh es la plataforma de experiencia de desarrollador para agentes de inteligencia artificial y MCP en Latinoamérica. Transformamos un proceso que toma días o semanas en uno que toma segundos, proporcionando una experiencia de despliegue fluida para aplicaciones de IA.

## ✨ Características

- **Despliegue Simplificado**
  ```bash
  nexu deploy agent
  ```

- **Experiencia de Desarrollador Excepcional**
  - CLI intuitivo con principios de diseño modernos
  - Dashboard visual para monitoreo en tiempo real
  - Documentación completa en español y portugués
  - Templates optimizados para casos de uso latinoamericanos

- **Hub MCP Integrado**
  - Conecta con servidores MCP en segundos
  - Descubre nuevas capacidades sin escribir código
  - Integración fluida con flujos de trabajo existentes

## 📦 Instalación

```bash
npm install -g @nexu-ai/cli
```

## 🚀 Uso

```bash
# Desplegar un agente
nexu deploy agent

# Listar templates disponibles
nexu templates list

# Conectar con un servidor MCP
nexu mcp connect
```

## 🏗️ Arquitectura

Nexu.sh está construido como un monorepo con los siguientes paquetes:

- `@nexu-ai/cli`: La interfaz de línea de comandos principal
- `@nexu-ai/core`: Funcionalidad central para despliegue y gestión
- `@nexu-ai/shared`: Tipos y utilidades compartidas
- `@nexu-ai/templates`: Templates pre-configurados
- `@nexu-ai/mcp-hub`: Integración con servidores MCP

## 🛠️ Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/nexu-ai/cli.git
cd cli

# Instalar dependencias
pnpm install

# Construir todos los paquetes
pnpm build

# Ejecutar el CLI localmente
pnpm dev
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, lee nuestras [guías de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## 📝 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## 🌎 Comunidad

- [Twitter](https://twitter.com/nexu_ai)
- [Discord](https://discord.gg/nexu)
- [Documentación](https://docs.nexu.sh)
- [Autor](https://github.com/nicolascine) - Nicolás Silva
