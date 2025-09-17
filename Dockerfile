FROM n8nio/n8n:latest

ENV NODE_FUNCTION_ALLOW_EXTERNAL=axios
ENV N8N_ENABLE_EXTERNAL_MODULES=true

# Instala dependencias necesarias
RUN npm install axios n8n-workflow n8n-core

# Copia el nodo compilado
COPY ./custom-nodes/n8n-nodes-nhost-graphql/dist /data/custom-nodes/n8n-nodes-nhost-graphql
