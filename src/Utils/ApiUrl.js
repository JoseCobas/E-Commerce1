export const apiURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/'
    : 'http://acma1.clientsmile.se/'