# Configuración de Tailwind CSS en Angular 20

Este documento describe cómo configurar Tailwind CSS en un proyecto Angular 20 desde cero.

## Prerrequisitos

- Node.js instalado
- Angular CLI instalado globalmente: `npm install -g @angular/cli`

## 1. Crear el proyecto Angular

```bash
ng new property-app
cd property-app
```

## 2. Instalar Tailwind CSS y dependencias

```bash
npm install -D tailwindcss@3.4.0 postcss@8.4.31 autoprefixer@10.4.16
```

## 3. Crear archivo de configuración de Tailwind CSS

Crear el archivo `tailwind.config.js` en la raíz del proyecto:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 4. Configurar PostCSS

Crear/actualizar el archivo `postcss.config.mjs` en la raíz del proyecto:

```javascript
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}
```

## 5. Configurar estilos globales

Actualizar el archivo `src/styles.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* You can add global styles to this file, and also import other style files */
```

## 6. Verificar la configuración

Crear un archivo HTML de prueba en `src/app/app.html`:

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/styles.css" rel="stylesheet">
</head>
<body class="bg-gray-100 min-h-screen">
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">
      🏠 Property App
    </h1>
    
    <p class="text-lg text-gray-700 mb-8">
      Tailwind CSS está funcionando correctamente
    </p>

    <div class="bg-white rounded-lg shadow-md p-6 max-w-md">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">
        Casa de Prueba
      </h2>
      <p class="text-gray-600 mb-4">
        Esta es una tarjeta de ejemplo para verificar que Tailwind CSS funciona.
      </p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
        Ver Detalles
      </button>
    </div>
  </div>
</body>
</html>
```

## 7. Ejecutar la aplicación

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`

## Notas importantes

- Angular 20 usa el nuevo builder `@angular/build:application` que internamente utiliza Vite
- Las versiones específicas de Tailwind CSS (3.4.0), PostCSS (8.4.31) y autoprefixer (10.4.16) son compatibles con Angular 20
- El archivo `postcss.config.mjs` debe usar la sintaxis de array para los plugins, no la sintaxis de objeto
- El archivo `tailwind.config.js` debe escanear archivos HTML y TypeScript en la carpeta `src/`

## Verificación

Si la configuración es correcta, deberías ver:
- Fondo gris claro en la página
- Título azul grande
- Tarjeta blanca con sombra
- Botón azul que cambia de color al hacer hover

## Estructura de archivos final

```
property-app/
├── src/
│   ├── app/
│   │   └── app.html
│   └── styles.css
├── tailwind.config.js
├── postcss.config.mjs
└── package.json
``` 