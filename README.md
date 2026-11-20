# BuruSPIN — Herramientas de Aula y Gamificación

**IES Sáenz de Buruaga** · Aplicación web interactiva desarrollada para dinamizar clases presenciales, selección aleatoria de alumnado, dinámicas de grupo y actividades participativas en el aula.

---

## 📋 Resumen del Proyecto

| Parámetro | Detalle |
| :--- | :--- |
| **Repositorio GitHub** | [https://github.com/xavileeee/BuruSPIN](https://github.com/xavileeee/BuruSPIN) |
| **Acceso desde Homarr** | Módulo directo en BuruPanel (`http://panel.saenzdeburuaga`) |
| **Manual de Usuario en BuruWikiTIC** | [Libro BuruPanel > Capítulo BuruSPIN](http://buruwiki.saenzdeburuaga/books/burupanel/chapter/buruspin) |
| **Script ID** | `1DnChMv5nofr6LwNsCgA-2Lu1Yh2dEdh0BNZbUsvgLiY_sHe-xjymGwbm` |
| **Acceso Online (GAS)** | [Web App Desplegada](https://script.google.com/a/macros/iessaenzdeburuaga.es/s/AKfycbwxwNR8mKbTA8f7T_zEGzk4kGjkGbkKqI4V2jR0Hz5JK_Xw91PfY0rr45Ks0Otu_hnz/exec) · [Editor Apps Script](https://script.google.com/d/1DnChMv5nofr6LwNsCgA-2Lu1Yh2dEdh0BNZbUsvgLiY_sHe-xjymGwbm/edit) |
| **Estilo Visual** | *Neo-brutalism* moderno, Tailwind CSS, animaciones fluidas y alto contraste |
| **Público Objetivo** | Docentes con paneles digitales interactivos (PDI) o proyectores en el aula |

---

## 🎨 Identidad Visual y Unicidad de Iconos

Siguiendo el principio de **Unicidad de Iconos** del IES Sáenz de Buruaga:

- **Icono Oficial:** Isotipo multicolor Papirus Lucky Patcher (ruleta/juegos didácticos).
- **Ruta Local:** [buruspin_logo.png](file:///d:/PROYECTOS/IES%20SAENZ%20DE%20BURUAGA/PROYECTOS/BuruSPIN/buruspin_logo.png) · [buruspin_logo.svg](file:///d:/PROYECTOS/IES%20SAENZ%20DE%20BURUAGA/PROYECTOS/BuruSPIN/buruspin_logo.svg)
- **Repositorio Central de Identidad:** [buruspin_logo_oficial.png](file:///d:/PROYECTOS/IES%20SAENZ%20DE%20BURUAGA/Identidad_Corporativa/logos/buruspin_logo_oficial.png)

---

## 🎲 Módulos y Utilidades de Aula

1. **Tómbola / Selector Aleatorio de Alumnos (`#slot-reel`):**
   - Animación de ruleta o máquina tragaperras para seleccionar estudiantes de forma imparcial y divertida.
   - Efectos de resplandor visual (`winner-glow`) y sonido al proclamar el ganador.
   - Opción para excluir alumnos ya seleccionados en la misma sesión.

2. **Lanzador de Dados Animado (`.dice-dance`):**
   - Lanzamiento simultáneo de uno o varios dados con físicas y rotaciones visuales.
   - Ideal para juegos didácticos, asignación de turnos o problemas de probabilidad y matemáticas.

3. **Generador de Equipos y Parejas:**
   - Permite pegar la lista del grupo clase y divide automáticamente a los alumnos en equipos equilibrados de tamaño configurable.

4. **Temporizador Rápido de Actividad:**
   - Cuenta atrás visual para ejercicios por tiempo limitado (retos de 1 a 5 minutos, preguntas rápidas, etc.).

---

## 📂 Archivos del Proyecto

```text
PROYECTOS/BuruSPIN/
├── .clasp.json                # Configuración de Clasp y Script ID oficial
├── appsscript.json            # Manifiesto de la WebApp
├── buruspin_logo.png          # Icono oficial PNG
├── buruspin_logo.svg          # Icono oficial vectorial SVG
├── capturas/                  # Capturas de la interfaz real del aula
│   ├── captura_buruspin_inicio.png
│   └── captura_buruspin_ui_real.png
├── Código.js                  # Servidor mínimo para despliegue con HtmlService
├── index.html                 # Aplicación SPA autónoma con Tailwind CSS y componentes interactivos
└── README.md                  # Documentación técnica del proyecto
```

---

## 💻 Gestión y Despliegue con Clasp

```powershell
# Acceder a la carpeta
cd "D:\PROYECTOS\IES SAENZ DE BURUAGA\PROYECTOS\BuruSPIN"

# Descargar cambios desde Google Apps Script
clasp pull

# Desplegar cambios locales a la nube
clasp push
```
