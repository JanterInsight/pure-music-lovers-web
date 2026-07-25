# 05-contact_us - Plan de Implementación

## Enfoque Técnico

### Arquitectura
- **Tipo**: Componente JavaScript vanilla con HTML/CSS
- **Enfoque**: Formulario que utiliza mailto para enviar por Gmail
- **Responsividad**: Mobile-first, layout de 2 columnas en desktop

### Estructura de Archivos
```
code/
├── index.html          # Se agrega sección #contactanos
├── css/
│   └── main.css        # Estilos para contacto y formulario
└── js/
    └── contact.js      # Validación y lógica del formulario
```

### Decisiones Técnicas

#### 1. Estructura HTML
- **Sección**: `<section id="contactanos">` con título
- **Layout**: Dos columnas en desktop, una en mobile
  - Columna izquierda: Información de contacto
  - Columna derecha: Formulario
- **Información de contacto**:
  - Iconos para cada tipo (email, teléfono, ubicación, WhatsApp)
  - Enlaces clickeables
- **Formulario**: 
  - Campos: nombre, email, asunto, mensaje
  - Botón de envío

#### 2. CSS y Diseño
- **Layout**: CSS Grid o Flexbox
  - Desktop: 2 columnas (50% cada una)
  - Mobile: 1 columna (apilado)
- **Información de contacto**:
  - Iconos grandes y visibles
  - Texto legible
  - Enlaces con hover effects
- **Formulario**:
  - Inputs estilizados con bordes redondeados
  - Focus states visibles
  - Botón de envío prominente
  - Validación visual (bordes rojos en errores)
- **Responsivo**: Ajustar padding y tamaños en mobile

#### 3. Lógica JavaScript
- **Validación**:
  - Nombre: requerido, mínimo 2 caracteres
  - Email: requerido, formato válido
  - Asunto: requerido, mínimo 5 caracteres
  - Mensaje: requerido, mínimo 10 caracteres
- **Envío por Gmail**:
  - Usar `mailto:` con parámetros
  - Formato: `mailto:puremusiclovers@gmail.com?subject=...&body=...`
  - Codificar parámetros con `encodeURIComponent()`
- **Feedback**:
  - Mostrar mensajes de error inline
  - Mostrar confirmación antes de abrir Gmail
  - Limpiar formulario después de envío

#### 4. Enlaces Externos
- **WhatsApp**: 
  - Abrir en nueva pestaña (`target="_blank"`)
  - Icono de WhatsApp visible
- **Gmail**: 
  - mailto link
  - Se abre en cliente de correo del usuario
- **Teléfono**: 
  - `tel:` link para llamadas en móvil
- **Dirección**: 
  - Link a Google Maps (opcional)

#### 5. Responsividad
- **Desktop** (> 768px): 2 columnas lado a lado
- **Mobile** (< 768px): 1 columna, información arriba, formulario abajo
- **Padding**: Ajustar espaciado según breakpoint
- **Tipografía**: Escalar fuentes en mobile

#### 6. Accesibilidad
- Labels asociados a inputs
- Placeholders informativos
- Estados de foco visibles
- Contraste adecuado
- Navegación por teclado

## Datos de Contacto

```javascript
const contactInfo = {
  email: "puremusiclovers@gmail.com",
  phone: "+53 XXXXXXXX",
  address: "Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez",
  whatsappGroups: [
    {
      name: "Puros Melómanos",
      url: "https://chat.whatsapp.com/CkUOUaJSCrh8SX8k55UUVit?s=sw&p=a&mlu=0&ilr=0"
    },
    {
      name: "Difusión Melómana",
      url: "https://chat.whatsapp.com/JCM1ArPROaY7O44gmCmj4L"
    }
  ]
};
```

## Dependencias

- 00-main (debe estar implementado primero)

## Riesgos y Mitigaciones

| Riesgo | Mitigación |
|--------|-----------|
| mailto no funciona en todos los clientes | Probar en diferentes navegadores y clientes de correo |
| Validación muy estricta | Implementar validación client-side amigable |
| Formulario no se ve bien en mobile | Probar en diferentes tamaños de pantalla |
| Enlaces de WhatsApp rotos | Verificar URLs antes de implementar |

## Próximos Pasos

1. Crear estructura HTML de la sección de contacto
2. Implementar estilos CSS
3. Crear lógica JavaScript de validación
4. Implementar envío por mailto
5. Agregar enlaces de WhatsApp
6. Probar responsividad
7. Verificar accesibilidad