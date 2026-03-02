# BuruSPIN 🎰🎲🎡

**BuruSPIN** es una suite de herramientas interactivas diseñada para dinamizar el aula. Esta aplicación permite a los docentes realizar sorteos, lanzar dados, girar ruletas y crear grupos de alumnos de manera visual, rápida y divertida.

Desarrollada como un **Web App de Google Apps Script**, BuruSPIN combina un diseño moderno y "premium" (con animaciones y sonidos) con la potencia de la integración en el ecosistema de Google Workspace.

## ✨ Características Principales

La aplicación incluye cuatro módulos fundamentales:

*   🎰 **Tómbola (Efecto Tragamonedas)**: Selecciona un alumno al azar con una animación de giro. El sistema lleva un control para **no repetir nombres** hasta que todos hayan salido (incluye botón de reset).
*   🎲 **Generador de Números (Dados)**: Permite lanzar un "dado virtual" configurando el rango mínimo y máximo. Ideal para juegos, sorteos numéricos o asignar turnos de ejercicios.
*   🎡 **Ruleta Interactiva**: Una ruleta física virtual con sonidos de "tick" y modo dual:
    *   **Modo Alumnos**: Crea sectores automáticamente con los nombres de la clase.
    *   **Modo Números**: Configura de 2 a 16 sectores numéricos.
*   👥 **Creador de Grupos**: Divide a la clase en grupos de forma aleatoria indicando el número de alumnos deseado por grupo.
*   📋 **Gestión de Alumnos**: Panel lateral para pegar la lista de clase, con funciones para **guardar y cargar archivos `.txt`** locales, facilitando el uso de diferentes listas en segundos.

<img width="1360" height="694" alt="image" src="https://github.com/user-attachments/assets/34f06a5a-576f-4c35-a3a9-7d7053d1a040" />

<img width="1376" height="615" alt="image" src="https://github.com/user-attachments/assets/442c79a6-2ff5-4951-b9f3-e3e3f02c831f" />

<img width="1370" height="724" alt="image" src="https://github.com/user-attachments/assets/c68af38b-53ce-43cd-95f4-c9e5534460eb" />

<img width="1406" height="748" alt="image" src="https://github.com/user-attachments/assets/17b67725-7cf7-46d8-a091-81ca5f40d306" />


## 🚀 Cómo probar el proyecto rápidamente

Puedes previsualizar la interfaz de usuario de las siguientes maneras:

1.  **Directamente**: Abre el archivo `index.html` en tu navegador para ver el diseño y probar la lógica (las funciones de red no estarán activas).
2.  **GitHub Codespaces**:
    *   Abre este repositorio en un Codespace.
    *   Ejecuta `npm start` en la terminal.
    *   **IMPORTANTE**: En la pestaña de **Ports**, asegúrate de que el puerto (normalmente el 3000) esté configurado como **Público** (clic derecho sobre la visibilidad -> "Public").

## 🛠️ Desarrollo y Despliegue con CLASP

Este proyecto utiliza `@google/clasp` para sincronizar el código local con Google Apps Script.

### Comandos disponibles:

*   `npm run login`: Inicia sesión en tu cuenta de Google.
*   `npm run pull`: Descarga la última versión desde Google Apps Script.
*   `npm run push`: Sube tus cambios locales a Google Apps Script.
*   `npm run watch`: Sube automáticamente los cambios mientras editas.

> **Nota**: `clasp` se usa exclusivamente para subir el proyecto a Google Apps Script cuando se deseen desplegar los cambios oficialmente. El script `npm start` solo sirve para previsualizar el frontend (`index.html`).
