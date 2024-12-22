const BLOB_BASE_URL = process.env.NEXT_PUBLIC_BLOB_BASE_URL;

if (!BLOB_BASE_URL) {
  throw new Error('NEXT_PUBLIC_BLOB_BASE_URL is not defined');
}

export const images = {
  hero: `${BLOB_BASE_URL}/hero-5IoIfatgruB5pXIGZZOAb2C618erNh`,
  tropea: `${BLOB_BASE_URL}/tropea-WuBGC8zfeeOEawFjO3ot3zvkzm39ox.jpg`,
  scilla: `${BLOB_BASE_URL}/scilla-QBCawAJoA2vnhoR4W4wKjEKY6AyxCM`,
  arcella: `${BLOB_BASE_URL}/arcella-IPeR9cebmErPaX0l0TK6dsAczNFNvX`,
  castello: `${BLOB_BASE_URL}/castella-8yiAXtrZIAYxaFag2o2YAxWIuk5OI8`,
  sila: `${BLOB_BASE_URL}/sila-PlZJaPPKCCf9Fsmjk3ZcetBi3dNvqq`,
  // Add more images as needed
};