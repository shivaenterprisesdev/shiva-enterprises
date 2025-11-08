import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

// SEO configuration constants
export const SEO_CONFIG = {
  siteName: 'Shiva Enterprises',
  siteUrl: 'https://www.shivaenterprises.co/',
  businessName: 'Shiva Enterprises',
  description: 'Leading distributor of industrial automation products, encoders, sensors, couplings, and electrical components. Authorized dealer for Kubler.',
  keywords: 'industrial automation, encoders, sensors, couplings, electrical components, Kubler, Autonics, industrial tools, automation products, rotary encoders, proximity sensors, flexible couplings',
  logo: '/assets/shiva-enterprises-logo.png',
  socialImage: '/assets/shiva-enterprises-logo.png',
  businessType: 'Corporation',
  industry: 'Industrial Automation & Electrical Components',
  foundedYear: '2014',
  contactInfo: {
    phone: '+91-9560906643',
    email: 'shivaenterprises52013@gmail.com',
    address: {
      street: 'Your Business Address',
      city: 'Your City',
      state: 'Your State',
      postalCode: 'Your Postal Code',
      country: 'India'
    }
  }
}

// Default SEO values
export const DEFAULT_SEO = {
  title: `${SEO_CONFIG.siteName} | Industrial Automation & Electrical Components`,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  canonical: SEO_CONFIG.siteUrl,
  image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.socialImage}`,
  type: 'website'
}

// Custom hook for SEO management
export const useSEO = (seoData = {}) => {
  const seo = {
    ...DEFAULT_SEO,
    ...seoData,
    title: seoData.title ? `${seoData.title} | ${SEO_CONFIG.siteName}` : DEFAULT_SEO.title,
    canonical: seoData.canonical || `${SEO_CONFIG.siteUrl}${window.location.pathname}`,
    image: seoData.image ? `${SEO_CONFIG.siteUrl}${seoData.image}` : DEFAULT_SEO.image
  }

  useEffect(() => {
    // Update page title in document
    document.title = seo.title
  }, [seo.title])

  return seo
}

// Generate JSON-LD structured data
export const generateStructuredData = (type, data = {}) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type
  }

  switch (type) {
    case 'Organization':
      return {
        ...baseData,
        name: SEO_CONFIG.businessName,
        url: SEO_CONFIG.siteUrl,
        logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.logo}`,
        description: SEO_CONFIG.description,
        foundingDate: SEO_CONFIG.foundedYear,
        industry: SEO_CONFIG.industry,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SEO_CONFIG.contactInfo.phone,
          contactType: 'Customer Service',
          email: SEO_CONFIG.contactInfo.email,
          availableLanguage: ['English', 'Hindi']
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: SEO_CONFIG.contactInfo.address.street,
          addressLocality: SEO_CONFIG.contactInfo.address.city,
          addressRegion: SEO_CONFIG.contactInfo.address.state,
          postalCode: SEO_CONFIG.contactInfo.address.postalCode,
          addressCountry: SEO_CONFIG.contactInfo.address.country
        },
        sameAs: [
          // Add social media URLs when available
        ],
        ...data
      }

    case 'Product':
      return {
        ...baseData,
        name: data.name,
        description: data.description,
        brand: {
          '@type': 'Brand',
          name: data.brand
        },
        category: data.category,
        image: data.image ? `${SEO_CONFIG.siteUrl}${data.image}` : undefined,
        offers: data.price ? {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: SEO_CONFIG.businessName
          }
        } : undefined,
        ...data
      }

    case 'BreadcrumbList':
      return {
        ...baseData,
        itemListElement: data.items?.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${SEO_CONFIG.siteUrl}${item.url}`
        })) || []
      }

    case 'WebSite':
      return {
        ...baseData,
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.siteUrl,
        description: SEO_CONFIG.description,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }

    default:
      return { ...baseData, ...data }
  }
}
