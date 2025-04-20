import request from "supertest";
import app from "@/app";
import prisma from "@/database/prisma";

describe("UsersController", () => {

    let userId: string;

    afterAll(async () => {
        await prisma.user.delete({
            where: {id: userId}
        });
    });

    it('should create a new user', async () => {
        const response = await request(app).post('/users').send({
            name: 'John Doe',
            email: 'o0m5t@example.com',
            password: '123456'
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('John Doe');

        userId = response.body.id;
    });
});