# BuruSPIN

Este proyecto es una aplicación desarrollada para **Google Apps Script**.

## Cómo probar el proyecto rápidamente

Puedes previsualizar la interfaz de usuario de las siguientes maneras:

1.  **Directamente**: Abre el archivo `index.html` en tu navegador.
2.  **GitHub Codespaces**:
    *   Abre este repositorio en un Codespace.
    *   Ejecuta `npm start` en la terminal.
    *   **IMPORTANTE**: En la pestaña de **Ports**, asegúrate de que el puerto (normalmente el 3000 o el que indique `serve`) esté configurado como **Público** (clic derecho sobre la visibilidad -> "Public").

## Desarrollo y Despliegue con CLASP

Este proyecto utiliza `@google/clasp` para sincronizar el código local con Google Apps Script.

### Comandos disponibles:

*   `npm run login`: Inicia sesión en tu cuenta de Google.
*   `npm run pull`: Descarga la última versión desde Google Apps Script.
*   `npm run push`: Sube tus cambios locales a Google Apps Script.
*   `npm run watch`: Sube automáticamente los cambios mientras editas.

> **Nota**: `clasp` se usa exclusivamente para subir el proyecto a Google Apps Script cuando se deseen desplegar los cambios oficialmente. El script `npm start` solo sirve para previsualizar el frontend (`index.html`).
