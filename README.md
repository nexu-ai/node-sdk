# Nexu.sh CLI

<div align="center">

[![npm version](https://img.shields.io/npm/v/@nexu-ai/cli.svg?style=flat-square)](https://www.npmjs.com/package/@nexu-ai/cli)
[![npm downloads](https://img.shields.io/npm/dm/@nexu-ai/cli.svg?style=flat-square)](https://www.npmjs.com/package/@nexu-ai/cli)
[![License](https://img.shields.io/npm/l/@nexu-ai/cli.svg?style=flat-square)](https://github.com/nexu-ai/cli/blob/main/LICENSE)
[![Twitter](https://img.shields.io/twitter/follow/nexu_ai?style=social)](https://twitter.com/nexu_ai)

</div>

## 🚀 La Plataforma de Experiencia de Desarrollador para Agentes AI y MCP en LATAM

Nexu.sh es la plataforma que transforma la implementación de agentes de IA y servidores MCP en Latinoamérica. Convertimos un proceso que toma días o semanas en uno que toma segundos, proporcionando una experiencia de despliegue fluida y sin fricciones.

## ✨ Características

- **Despliegue Simplificado**
  ```bash
  nexu deploy --template chatbot-rag --name mi-agente
  ```

- **Experiencia de Desarrollador Excepcional**
  - CLI intuitivo con feedback en tiempo real
  - Dashboard visual para monitoreo y gestión
  - Documentación completa en español y portugués
  - Templates optimizados para casos de uso latinoamericanos

- **Hub MCP Integrado**
  - Conecta con servidores MCP en segundos
  - Descubre nuevas capacidades sin escribir código
  - Integración fluida con flujos de trabajo existentes

## 🏗️ Agentes Disponibles

1. **ChatBot RAG Empresarial**
2. **Asistente de Atención al Cliente**
3. **Agente de Procesamiento de Documentos**
4. **Asistente de Ventas y Marketing**
5. **Agente de Análisis de Datos Predictivo**

## 📦 Instalación

```bash
npm install -g @nexu-ai/cli
```

## 🚀 Uso

```bash
# Desplegar un agente
nexu deploy --template chatbot-rag --name mi-agente

# Ver el estado de un despliegue
nexu status --name mi-agente

# Configurar credenciales AWS
nexu config --profile default --region us-east-1
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
