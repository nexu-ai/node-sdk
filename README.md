# Nexu.sh CLI

<div align="center">

[![npm version](https://img.shields.io/npm/v/@nexu-ai/cli.svg?style=flat-square)](https://www.npmjs.com/package/@nexu-ai/cli)
[![npm downloads](https://img.shields.io/npm/dm/@nexu-ai/cli.svg?style=flat-square)](https://www.npmjs.com/package/@nexu-ai/cli)
[![License](https://img.shields.io/npm/l/@nexu-ai/cli.svg?style=flat-square)](https://github.com/nexu-ai/cli/blob/main/LICENSE)
[![Twitter](https://img.shields.io/twitter/follow/nexu_ai?style=social)](https://twitter.com/nexu_ai)

</div>

## 🚀 The Vercel for AI Agents in LATAM

Nexu.sh es la plataforma de experiencia de desarrollador para agentes de inteligencia artificial y MCP en Latinoamérica. Convertimos un proceso que toma días o semanas en uno que toma segundos, con la misma simplicidad que ha hecho a Vercel indispensable para desarrolladores frontend.

## ✨ Características

- **Deployment simplificado al extremo**
  ```bash
  nexu deploy chatbot-rag
  ```

- **Experiencia de desarrollador extraordinaria**
  - CLI intuitivo inspirado en herramientas amadas como Vercel y Supabase
  - Dashboard visual que muestra exactamente lo que necesitas
  - Documentación completa en español y portugués
  - Templates optimizados para casos de uso latinoamericanos

- **Hub de MCP integrado y sin fricción**
  - Conecta con servidores MCP en segundos
  - Descubre nuevas capacidades sin escribir código
  - Integra herramientas en tu workflow existente

## 📦 Instalación

```bash
npm install -g @nexu-ai/cli
```

## 🚀 Uso

```bash
# Desplegar un agente
nexu deploy chatbot-rag

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

## 🙏 Agradecimientos

Gracias a todos nuestros [contribuidores](https://github.com/nexu-ai/cli/graphs/contributors) y a la comunidad de código abierto por su apoyo. Un agradecimiento especial a [Nicolás Silva](https://github.com/nicolascine) por crear y mantener este proyecto. 