import request from "supertest";
import app from "./app";

describe('products', () => {
    it('should products list', async () => {
        const response = await request(app).get('/products');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    price: expect.any(Number),
                }),
            ])
        );
    });
});