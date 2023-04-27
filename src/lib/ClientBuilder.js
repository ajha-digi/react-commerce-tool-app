import fetch from 'node-fetch'
import { ClientBuilder } from '@commercetools/sdk-client-v2'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

export const projectKey = process.env.CTP_PROJECT_KEY
const authMiddlewareOptions = {
  host: process.env.CTP_AUTH_URL,
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
  },
  scopes: [`manage_project:${projectKey}`],
  fetch,
}

const httpMiddlewareOptions = {
  host: process.env.CTP_API_URL,
  fetch,
}

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build()

export const getApiRoot = () => {
  return createApiBuilderFromCtpClient(client)
}
