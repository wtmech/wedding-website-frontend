const BLOB_BASE_URL = process.env.NEXT_PUBLIC_BLOB_BASE_URL;

if (!BLOB_BASE_URL) {
  throw new Error('NEXT_PUBLIC_BLOB_BASE_URL is not defined');
}

export const images = {
  tropea: `${BLOB_BASE_URL}/tropea-WuBGC8zfeeOEawFjO3ot3zvkzm39ox.jpg`,
  scilla: `${BLOB_BASE_URL}/scilla-QBCawAJoA2vnhoR4W4wKjEKY6AyxCM`,
  arcella: `${BLOB_BASE_URL}/arcella-IPeR9cebmErPaX0l0TK6dsAczNFNvX`,
  castello: `${BLOB_BASE_URL}/castella-8yiAXtrZIAYxaFag2o2YAxWIuk5OI8`,
  sila: `${BLOB_BASE_URL}/sila-PlZJaPPKCCf9Fsmjk3ZcetBi3dNvqq`,
  proposal: `${BLOB_BASE_URL}/proposal-N122uiT26MzAahdnTjylB3Ax1ajwuo.png`,
};