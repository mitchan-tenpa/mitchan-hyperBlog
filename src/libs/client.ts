import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "mitchan-blog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "95a32c01fd904de5ab5855cfab417f62a3e0",
  // apiKey: process.env.API_KEY,
});
