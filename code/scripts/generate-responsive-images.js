import sharp from 'sharp'
import { readdirSync, mkdirSync, existsSync } from 'fs'
import { join, extname, basename } from 'path'

const INPUT_DIR = join(process.cwd(), 'public', 'gallery')
const OUTPUT_DIR = join(process.cwd(), 'public', 'gallery')
const WIDTHS = [400, 800, 1200, 1600]
const QUALITY = 85

async function generateResponsiveImages() {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const files = readdirSync(INPUT_DIR).filter(
    (f) => /\.(webp|jpg|jpeg|png)$/i.test(f) && !/-\d+w\./.test(f),
  )

  for (const file of files) {
    const inputPath = join(INPUT_DIR, file)
    const name = basename(file, extname(file))

    console.log(`Procesando: ${file}`)

    for (const width of WIDTHS) {
      const outputName = `${name}-${width}w.webp`
      const outputPath = join(OUTPUT_DIR, outputName)

      try {
        await sharp(inputPath)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toFile(outputPath)
        console.log(`  OK ${outputName}`)
      } catch (err) {
        console.error(`  FAIL ${outputName}:`, err.message)
      }
    }
  }

  console.log('\nGeneracion completa')
}

generateResponsiveImages().catch(console.error)