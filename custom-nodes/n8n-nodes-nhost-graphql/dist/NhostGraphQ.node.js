"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhostGraphQL = void 0;
class NhostGraphQL {
    constructor() {
        this.description = {
            displayName: 'Nhost GraphQL',
            name: 'nhostGraphQL',
            group: ['transform'],
            version: 1,
            description: 'Ejecuta queries y mutations en Nhost',
            defaults: {
                name: 'Nhost GraphQL',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Query',
                    name: 'query',
                    type: 'string',
                    default: '',
                    description: 'Query o mutation GraphQL',
                    required: true,
                },
                {
                    displayName: 'Variables',
                    name: 'variables',
                    type: 'json',
                    default: {},
                    description: 'Variables para la query',
                },
                {
                    displayName: 'Admin Secret',
                    name: 'adminSecret',
                    type: 'string',
                    default: '',
                    description: 'x-hasura-admin-secret de Nhost',
                    required: true,
                },
                {
                    displayName: 'GraphQL Endpoint',
                    name: 'endpoint',
                    type: 'string',
                    default: 'https://backend.nhost.app/v1/graphql',
                    description: 'URL del endpoint GraphQL de Nhost',
                    required: true,
                }
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const query = this.getNodeParameter('query', i);
            const variables = this.getNodeParameter('variables', i);
            const adminSecret = this.getNodeParameter('adminSecret', i);
            const endpoint = this.getNodeParameter('endpoint', i);
            const response = await this.helpers.request({
                method: 'POST',
                url: endpoint,
                headers: {
                    'Content-Type': 'application/json',
                    'x-hasura-admin-secret': adminSecret,
                },
                body: {
                    query,
                    variables,
                },
                json: true,
            });
            returnData.push({ json: response });
        }
        return [returnData];
    }
}
exports.NhostGraphQL = NhostGraphQL;
