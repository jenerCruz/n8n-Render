import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class NhostGraphQL implements INodeType {
  description: INodeTypeDescription = {
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
      },
      {
        displayName: 'Variables',
        name: 'variables',
        type: 'json',
        default: {},
        description: 'Variables para la query',
      },
    ],
  };

  async execute() {
    // lógica pendiente
    return this.helpers.returnJsonArray([{ status: 'pendiente' }]);
  }
}
