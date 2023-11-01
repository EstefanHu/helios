const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';  
`;

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1, mode=block',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  //   {
  //     key: 'Content-Security-Policy',
  //     value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  //   },
];

module.exports = {
  securityHeaders,
};