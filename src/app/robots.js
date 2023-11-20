export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/app/',
    },
    sitemap: 'https://helios-journal/sitemap.xml',
  };
}
