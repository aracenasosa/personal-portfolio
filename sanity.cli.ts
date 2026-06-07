/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

for (const envFileName of ['.env', '.env.local']) {
  const envPath = resolve(process.cwd(), envFileName)

  if (!existsSync(envPath)) {
    continue
  }

  const envFile = readFileSync(envPath, 'utf8')

  for (const line of envFile.split('\n')) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) {
      continue
    }

    const [rawKey, ...valueParts] = trimmed.split('=')
    const key = rawKey.trim()
    const value = valueParts.join('=').trim().replace(/^["']|["']$/g, '')

    process.env[key] ??= value
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineCliConfig({ api: { projectId, dataset } })
