import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

// Create pg pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create Prisma adapter
const adapter = new PrismaPg(pool);

// Pass adapter to PrismaClient
const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const adminEmail = "admin@example.com";
  const adminPassword = "Admin@123";

  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log("✅ Admin already exists.");
    return;
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await prisma.admin.create({
    data: {
      name: "Super Admin",
      email: adminEmail,
      password: hashedPassword,
    },
  });

  console.log("🚀 Admin created successfully!");
  console.log("Email:", adminEmail);
  console.log("Password:", adminPassword);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding admin:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });