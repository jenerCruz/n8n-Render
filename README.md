# 🧩 n8n-Render: Automatización modular con persistencia externa

Este proyecto despliega una instancia de n8n en Render, conectada con Nhost para persistencia de datos, sesiones y contexto. Ideal para flujos técnicos que requieren almacenamiento confiable y coordinación entre servicios.

## 🚀 ¿Qué incluye?
- `render.yaml`: configuración para despliegue automático en Render.
- `Dockerfile`: imagen personalizada con nodos externos y librerías.
- `custom-nodes/`: nodos personalizados para conexión con APIs y backend.
- `workflows/`: flujos exportados de n8n listos para clonar.
- `assets/`: diagramas, capturas y logos para onboarding técnico.

## 🔗 Servicios conectados
- Render (n8n)
- Nhost (GraphQL, Auth, Storage)
- Supabase (opcional)
- Otros backends externos vía HTTP o GraphQL

## 🧩 Cómo desplegar
1. Clona el repositorio
2. Configura tus variables en `.env`
3. Conecta tu repo a Render
4. ¡Listo! Tu sistema de automatización estará activo

## ❤️ Autor
Eduardo — arquitecto modular, resiliente y emocional
