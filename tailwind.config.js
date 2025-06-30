/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
      },
      colors: {
        // Colores principales - Paleta azul profesional
        primary: '#1e40af',      // blue-700 - más vibrante que el anterior
        secondary: '#059669',     // emerald-600 - verde más profesional
        accent: '#f59e0b',        // amber-500 - para destacar elementos
        
        // Colores de fondo
        header: '#1e293b',        // slate-800 - menos oscuro que antes
        footer: '#334155',        // slate-700 - más claro que antes
        background: '#f8fafc',    // slate-50 - fondo general claro
        
        // Colores de texto
        textLight: '#ffffff',     // blanco puro para mejor contraste
        textDark: '#1e293b',      // slate-800 para texto oscuro
        textMuted: '#64748b',     // slate-500 para texto secundario
        
        // Colores de estado
        success: '#10b981',       // emerald-500
        warning: '#f59e0b',       // amber-500
        error: '#ef4444',         // red-500
        info: '#3b82f6',          // blue-500
      },
    },
  },
  plugins: [],
} 