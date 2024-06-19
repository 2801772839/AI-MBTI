const { generateService } = require('@umijs/openapi')

generateService({
  schemaPath: 'http://localhost:8101/api/v2/api-docs',
  serversPath: './src',
  requestLibPath: 'import request from "@/utils/request"',
})
