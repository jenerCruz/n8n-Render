FROM n8nio/n8n:latest

ENV NODE_FUNCTION_ALLOW_EXTERNAL=axios,cheerio,openai
ENV N8N_ENABLE_EXTERNAL_MODULES=true

# Instala módulos externos si los necesitas
RUN npm install axios cheerio openai

# Copia tus nodos personalizados
COPY ./custom-nodes /data/custom-nodes
