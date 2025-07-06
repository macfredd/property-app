# Environment Configuration

Este directorio contiene las configuraciones de environment para diferentes entornos de la aplicación.

## Archivos

- `environment.ts` - Configuración para desarrollo
- `environment.prod.ts` - Configuración para producción

## Configuración

### Desarrollo (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  debug: true,
  logLevel: 'debug'
};
```

### Producción (environment.prod.ts)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.tupropiedad.com',
  debug: false,
  logLevel: 'error'
};
```

## Uso

Para usar la configuración en tus servicios o componentes:

```typescript
import { environment } from '../environments/environment';

// Usar la URL de la API
const apiUrl = environment.apiUrl;

// Verificar si estamos en producción
if (environment.production) {
  // Lógica específica de producción
}
```

## Builds

- **Desarrollo**: `ng serve` (usa environment.ts)
- **Producción**: `ng build` (usa environment.prod.ts automáticamente)

## Agregar nuevas configuraciones

Para agregar nuevas variables de environment:

1. Agrega la variable a `environment.ts`
2. Agrega la variable a `environment.prod.ts`
3. Usa la variable en tu código

```typescript
// En environment.ts y environment.prod.ts
export const environment = {
  // ... otras configuraciones
  newVariable: 'valor'
};

// En tu servicio
const value = environment.newVariable;
``` 