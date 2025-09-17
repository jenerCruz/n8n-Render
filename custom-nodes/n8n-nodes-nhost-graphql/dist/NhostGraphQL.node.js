const { NodeOperationError } = require('n8n-workflow');
const axios = require('axios');

module.exports = {
  name: 'nhostGraphQL',
  displayName: 'Nhost GraphQL',
  group: ['input'],
  version: 1,
  description: 'Ejecuta queries y mutations en Nhost GraphQL',
  defaults: {
    name: 'Nhost GraphQL',
  },
  inputs: ['main'],
  outputs: ['main'],
  properties: [
    {
      displayName: 'Query / Mutation',
      name: 'query',
      type: 'string',
      default: '',
      required: true,
    },
    {
      displayName: 'Variables (JSON)',
      name: 'variables',
      type: 'json',
      default: '{}',
    }
  ],
  async execute() {
    const items = this.getInputData();
    const returnData = [];

    const endpoint = process.env.NHOST_GRAPHQL_URL;
    const secret = process.env.NHOST_ADMIN_SECRET;

    for (let i = 0; i < items.length; i++) {
      const query = this.getNodeParameter('query', i);
      const variables = this.getNodeParameter('variables', i);

      try {
        const response = await axios.post(endpoint, {
          query,
          variables
        }, {
          headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': secret
          }
        });

        returnData.push({ json: response.data });
      } catch (error) {
        throw new NodeOperationError(this.getNode(), error.response?.data || error.message);
      }
    }

    return this.prepareOutputData(returnData);
  }
};