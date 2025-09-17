# Imagen oficial de n8n
FROM n8nio/n8n:latest

# Activar módulos externos
ENV N8N_ENABLE_EXTERNAL_MODULES=true
ENV NODE_FUNCTION_ALLOW_EXTERNAL=axios,n8n-workflow,n8n-core

# Instalar dependencias necesarias para tus nodos personalizados
RUN npm install axios n8n-workflow n8n-core

# Copiar nodos personalizados compilados
COPY ./custom-nodes/n8n-nodes-nhost-graphql/dist /data/custom-nodes/n8n-nodes-nhost-graphql