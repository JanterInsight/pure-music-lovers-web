# 05-contact_us - Contáctanos

## Objetivo

Crear una sección de contacto que permita a los usuarios comunicarse con Puros Melómanos a través de diferentes canales, incluyendo un formulario de envío de mensajes por Gmail.

## Disposición de Elementos

Información de Contacto → Formulario de Envío de Mensaje

## Especificaciones

### Información de Contacto
Mostrar la siguiente información de contacto:

- **Gmail**: puremusiclovers@gmail.com
- **Teléfono**: +53 XXXXXXXX
- **Dirección**: Cuba, Holguín, Banes, Radio Banes, Calle: Máximo Gómez
- **Grupo WhatsApp de Puros Melómanos**: [https://chat.whatsapp.com/CkUOUaJSCrh8SX8k55UUVit?s=sw&p=a&mlu=0&ilr=0](https://chat.whatsapp.com/CkUOUaJSCrh8SX8k55UUVit?s=sw&p=a&mlu=0&ilr=0)
- **Grupo WhatsApp de Difusión Melómana**: https://chat.whatsapp.com/JCM1ArPROaY7O44gmCmj4L

### Formulario de Envío de Mensaje
Formulario que envía mensajes por Gmail con los siguientes campos:

- **Nombre**: Campo de texto para el nombre del usuario
- **Email**: Campo de email para la dirección de correo
- **Asunto**: Campo de texto para el asunto del mensaje
- **Mensaje**: Área de texto para el contenido del mensaje
- **Botón de envío**: Botón para enviar el mensaje

### Comportamiento del Formulario
- **Envío por Gmail**: Al enviar el formulario, se debe abrir el cliente de Gmail del usuario con:
  - Destinatario: puremusiclovers@gmail.com
  - Asunto: El asunto ingresado en el formulario
  - Cuerpo: El mensaje ingresado en el formulario
- **Validación**: Validar campos requeridos antes de enviar
- **Feedback**: Mostrar confirmación de envío o mensajes de error

### Enlaces Externos
- Los enlaces de WhatsApp deben abrirse en nueva pestaña
- El enlace de Gmail debe abrir el cliente de correo

### Diseño
- **Layout**: Dos columnas (información + formulario) en desktop, una columna en mobile
- **Estilos**: Consistente con el resto del sitio
- **Responsivo**: Adaptable a todos los tamaños de pantalla

## Criterios de Aceptación

1. La sección muestra toda la información de contacto (Gmail, teléfono, dirección, WhatsApp)
2. Los enlaces de WhatsApp son clickeables y abren en nueva pestaña
3. El formulario tiene todos los campos requeridos (nombre, email, asunto, mensaje)
4. Al enviar el formulario se abre Gmail con los datos del mensaje
5. El formulario valida los campos antes de enviar
6. El diseño es responsive (2 columnas en desktop, 1 en mobile)
7. Los enlaces de WhatsApp funcionan correctamente
8. La información de contacto es clara y accesible
9. El diseño es consistente con el resto del sitio