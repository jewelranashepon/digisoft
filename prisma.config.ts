// import "dotenv/config";
// import { defineConfig } from "prisma/config";

// export default defineConfig({
//   schema: "prisma/schema.prisma",
//   migrations: {
//     path: "prisma/migrations",
//     seed: "tsx prisma/seed.ts",
//   },
//   datasource: {
//     url: process.env.DATABASE_URL,
//   },
// });

import { defineConfig } from "prisma/config";
import dotenv from "dotenv";

// Load default .env automatically
dotenv.config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    path: "prisma/migrations",
    seed: "npx tsx prisma/seed.ts",
  },
});