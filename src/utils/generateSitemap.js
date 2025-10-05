import products from '../data/products.json'

const SITE_URL = 'https://www.shivaenterprisesindia.com'

// Static pages with their priorities and change frequencies
const staticPages = [
  {
    url: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: new Date().toISOString()
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString()
  },
  {
    url: '/categories',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString()
  },
  {
    url: '/brands',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString()
  },
  {
    url: '/get-quote',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString()
  }
]

// Generate category pages from products data
const generateCategoryPages = () => {
  const categoryPages = []
  const processedCategories = new Set()
  
  products.forEach(category => {
    if (category.categoryName && !processedCategories.has(category.categoryName)) {
      processedCategories.add(category.categoryName)
      categoryPages.push({
        url: `/products/${encodeURIComponent(category.categoryName.toLowerCase().replace(/\s+/g, '-'))}`,
        changefreq: 'weekly',
        priority: '0.8',
        lastmod: new Date().toISOString()
      })
    }
  })
  
  return categoryPages
}

// Generate product pages (if you have individual product pages)
const generateProductPages = () => {
  const productPages = []
  
  products.forEach(category => {
    if (category.products && category.products.length > 0) {
      category.products.forEach(product => {
        if (product.modelName) {
          const productSlug = `${category.categoryName}-${product.modelName}`.toLowerCase().replace(/\s+/g, '-')
          productPages.push({
            url: `/product/${encodeURIComponent(productSlug)}`,
            changefreq: 'monthly',
            priority: '0.6',
            lastmod: new Date().toISOString()
          })
        }
      })
    }
  })
  
  return productPages
}

// Generate XML sitemap
export const generateSitemap = () => {
  const categoryPages = generateCategoryPages()
  // Uncomment if you have individual product pages
  // const productPages = generateProductPages()
  
  const allPages = [
    ...staticPages,
    ...categoryPages
    // ...productPages
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return xml
}

// Generate robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Main pages
Allow: /
Allow: /about
Allow: /contact
Allow: /categories
Allow: /brands
Allow: /get-quote
Allow: /products/*

# Assets
Allow: /assets/
Allow: /src/data/

# Block development and admin paths
Disallow: /admin/
Disallow: /api/
Disallow: /dev/
Disallow: /_vite/
Disallow: /node_modules/

# Block query parameters that don't add value
Disallow: /*?*utm_*
Disallow: /*?*ref=*
Disallow: /*?*fbclid=*
Disallow: /*?*gclid=*

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay (optional, helps prevent server overload)
Crawl-delay: 1`
}

export default { generateSitemap, generateRobotsTxt }
