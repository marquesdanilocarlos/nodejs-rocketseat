import prisma from "@/prisma";

async function seed() {
    await prisma.user.createMany({
        data: [
            {name: "John", email: "john@gmail.com"},
            {name: "Doe", email: "doe@gmail.com"},
            {name: "Gonofredo", email: "gono@gmail.com"},
        ]
    });
}

seed().then(() => {
    console.log("Database Seeded!");
    prisma.$disconnect();
});