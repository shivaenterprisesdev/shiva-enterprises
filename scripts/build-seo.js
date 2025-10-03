import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { generateSitemap, generateRobotsTxt } from '../src/utils/generateSitemap.js'

console.log('🚀 Building SEO assets...')

try {
  // Ensure public directory exists
  if (!existsSync('./public')) {
    mkdirSync('./public', { recursive: true })
  }

  // Generate sitemap.xml
  const sitemap = generateSitemap()
  writeFileSync('./public/sitemap.xml', sitemap)
  console.log('✅ Sitemap generated at public/sitemap.xml')

  // Generate robots.txt (overwrite the existing one with dynamic content)
  const robotsTxt = generateRobotsTxt()
  writeFileSync('./public/robots.txt', robotsTxt)
  console.log('✅ Robots.txt generated at public/robots.txt')

  console.log('🎉 SEO assets build completed!')

} catch (error) {
  console.error('❌ Error building SEO assets:', error.message)
  process.exit(1)
}
