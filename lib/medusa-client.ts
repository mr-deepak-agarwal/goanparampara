import Medusa from "@medusajs/js-sdk";

// Set these in .env.local:
//   NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://your-backend.up.railway.app
//   NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_...
export const sdk = new Medusa({
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000",
  publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
});
