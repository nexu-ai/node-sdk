# Guía de Contribución

¡Gracias por tu interés en contribuir a Nexu.sh! Este documento te guiará a través del proceso de contribución.

## 🎯 Cómo Contribuir

1. **Reportar un Bug**
   - Usa el [issue tracker](https://github.com/nexu-ai/cli/issues) para reportar bugs
   - Asegúrate de que el bug no haya sido reportado ya
   - Incluye un título descriptivo y una descripción clara del problema
   - Si es posible, incluye un ejemplo de código que reproduzca el problema

2. **Sugerir una Mejora**
   - Usa el [issue tracker](https://github.com/nexu-ai/cli/issues) para sugerir mejoras
   - Describe la mejora y por qué crees que sería útil
   - Si es posible, incluye ejemplos de cómo funcionaría

3. **Enviar un Pull Request**
   - Fork el repositorio
   - Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
   - Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
   - Push a la rama (`git push origin feature/AmazingFeature`)
   - Abre un Pull Request

## 🛠️ Configuración del Entorno de Desarrollo

1. **Requisitos**
   - Node.js >= 18.0.0
   - pnpm >= 8.0.0
   - Git

2. **Instalación**
   ```bash
   git clone https://github.com/nexu-ai/cli.git
   cd cli
   pnpm install
   ```

3. **Construcción**
   ```bash
   pnpm build
   ```

4. **Desarrollo**
   ```bash
   pnpm dev
   ```

## 📝 Convenciones de Código

- Usamos TypeScript para todo el código
- Seguimos las [convenciones de commits convencionales](https://www.conventionalcommits.org/)
- Mantenemos una cobertura de tests alta
- Documentamos todas las APIs públicas

## 🧪 Tests

- Escribe tests para todas las nuevas funcionalidades
- Asegúrate de que todos los tests pasen antes de enviar un PR
- Usa `pnpm test` para ejecutar los tests

## 📚 Documentación

- Actualiza la documentación para reflejar cualquier cambio en la API
- Mantén los comentarios del código actualizados
- Asegúrate de que los ejemplos en el README funcionen

## 🤝 Código de Conducta

Por favor, lee y sigue nuestro [Código de Conducta](CODE_OF_CONDUCT.md).

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones serán licenciadas bajo la [Licencia MIT](LICENSE). 