import { Client, Databases } from 'appwrite'

const client = new Client()
const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT
const projectID = import.meta.env.VITE_APPWRITE_PROJECT_ID

client.setEndpoint(endpoint).setProject(projectID)
const databases = new Databases(client)

export { client, databases }
