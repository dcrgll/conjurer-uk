export default function sitemap() {
  const routes = [
    '',
    '/live',
    '/releases',
    '/store',
    '/contact',
    '/videos',
    '/videos/it-dwells',
    '/videos/rot',
    '/videos/cracks-in-the-pyre',
    '/releases/pathos',
    '/releases/i',
    '/releases/mire',
    '/releases/curse-these-metal-hands',
    '/releases/conjurer-x-palm-reader-split'
  ].map((route) => ({
    url: `https://www.conjureruk.com${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes]
}
