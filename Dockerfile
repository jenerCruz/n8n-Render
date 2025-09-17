FROM n8nio/n8n:latest

ENV NODE_FUNCTION_ALLOW_EXTERNAL=axios,cheerio
ENV N8N_ENABLE_EXTERNAL_MODULES=true

RUN npm install axios cheerio

COPY ./custom-nodes /data/custom-nodes
