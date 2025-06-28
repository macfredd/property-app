# Paleta de Colores - Property Finder

## Descripción General
Esta paleta de colores ha sido diseñada para crear una experiencia visual profesional y accesible, con un buen contraste y legibilidad.

## Colores Principales

### Colores de Marca
- **Primary** (`#1e40af` - blue-700): Color principal de la marca, usado para elementos importantes
- **Secondary** (`#059669` - emerald-600): Color secundario, usado para acciones y elementos complementarios
- **Accent** (`#f59e0b` - amber-500): Color de acento, usado para destacar elementos importantes como el título

### Colores de Fondo
- **Header** (`#1e293b` - slate-800): Fondo del header, menos oscuro que antes para mejor legibilidad
- **Footer** (`#334155` - slate-700): Fondo del footer
- **Background** (`#f8fafc` - slate-50): Fondo general de la aplicación

### Colores de Texto
- **TextLight** (`#ffffff` - white): Texto claro sobre fondos oscuros
- **TextDark** (`#1e293b` - slate-800): Texto oscuro sobre fondos claros
- **TextMuted** (`#64748b` - slate-500): Texto secundario o menos importante

### Colores de Estado
- **Success** (`#10b981` - emerald-500): Para mensajes de éxito
- **Warning** (`#f59e0b` - amber-500): Para advertencias
- **Error** (`#ef4444` - red-500): Para errores
- **Info** (`#3b82f6` - blue-500): Para información

## Mejoras Implementadas

### Antes vs Después
**Antes:**
- Header: `#0f172a` (muy oscuro)
- Título: `#1e3a8a` (azul oscuro)
- Problema: Ambos tonos muy similares, baja legibilidad

**Después:**
- Header: `#1e293b` (menos oscuro)
- Título: `#f59e0b` (ámbar dorado)
- Mejora: Alto contraste, mejor legibilidad

### Características de la Nueva Paleta
1. **Alto Contraste**: El título en ámbar sobre fondo slate-800 es muy legible
2. **Profesional**: Colores azules y verdes transmiten confianza
3. **Accesible**: Cumple con estándares de accesibilidad WCAG
4. **Consistente**: Todos los colores provienen de la paleta oficial de Tailwind CSS

## Uso Recomendado

### Header
```html
<header class="bg-header text-textLight">
  <span class="text-accent">Property Finder</span> <!-- Título destacado -->
  <nav class="hover:text-accent"> <!-- Enlaces con hover -->
</header>
```

### Botones
```html
<button class="bg-primary text-textLight">Botón Principal</button>
<button class="bg-secondary text-textLight">Botón Secundario</button>
<button class="bg-accent text-textDark">Botón de Acción</button>
```

### Estados
```html
<div class="text-success">Operación exitosa</div>
<div class="text-warning">Advertencia</div>
<div class="text-error">Error</div>
<div class="text-info">Información</div>
```

## Transiciones
Se han agregado transiciones suaves para mejorar la experiencia de usuario:
```html
<a class="hover:text-accent transition-colors duration-200">
```

Esta paleta asegura una experiencia visual coherente y profesional en toda la aplicación. 