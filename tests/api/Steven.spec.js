import { test, expect, request } from '@playwright/test';
const { apiRoutes } = require('../config/apiRoutes');
const { env } = require('../config/env');


test.describe('API Regression - Client Flow', () => {
    let apiContext;
    let token;

    test.beforeAll(async () => {
        apiContext = await request.newContext({
            baseURL: env.baseURL
        });
    });

    test('GET subscription list returns valid data', async () => {

        const response = await apiContext.get(apiRoutes.subscription.list);
        expect(response.status()).toBe(200);
        const body = await response.json();
        // Verify top-level fields
        expect(body.statusCode).toBe(200);
        expect(body.message).toBe('Success');
        expect(Array.isArray(body.data)).toBeTruthy();
        expect(body.data.length).toBeGreaterThan(0);

        for (const item of body.data) {
            expect(item.id).toBeDefined();
            expect(item.fixedId).toBeDefined();
            expect(Array.isArray(item.prices)).toBeTruthy();

            for (const price of item.prices) {
                expect([1, 3, 6, 12]).toContain(price.period);
            }
        }
    });


});