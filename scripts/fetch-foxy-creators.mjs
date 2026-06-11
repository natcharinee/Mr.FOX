import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { fetchFoxyCreators } from '../src/lib/platformFeed.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.resolve(__dirname, '../src/data/foxyCreators.json')

const creators = await fetchFoxyCreators({ limit: 20, pageSize: 30 })

const payload = {
  source: 'https://www.foxy.club/MenuPublic',
  fetchedAt: new Date().toISOString(),
  creators,
}

await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
console.log(`Saved ${creators.length} creators to ${outputPath}`)
