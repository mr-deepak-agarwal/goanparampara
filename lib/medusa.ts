// Stub for the future Medusa.js backend connection.
// Once Medusa is running (locally or hosted), set MEDUSA_BACKEND_URL
// in .env.local and replace the placeholder data in lib/data.ts with
// real calls through this client.
//
// Example (once ready):
//
// const MEDUSA_URL = process.env.MEDUSA_BACKEND_URL;
//
// export async function getProducts() {
//   const res = await fetch(`${MEDUSA_URL}/store/products`, {
//     next: { revalidate: 60 }, // ISR: refresh every 60s
//   });
//   const { products } = await res.json();
//   return products;
// }

export {};
