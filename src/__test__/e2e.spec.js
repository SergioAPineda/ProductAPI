const axios = require('axios');
const mongoose = require('mongoose');
require('../../.env').config();
const time = 10000;
const url = process.env.CONNECTION_STRING
const baseUrl = 'http://localhost:5000'

describe('Products API', () => {
    beforeAll(async () => {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        try {
            await mongoose.connection.dropCollection('products')
        } catch (error) {
            await mongoose.connection.createCollection('products')
        }
    }, time)

    afterAll(async () => {
        await mongoose.connection.dropCollection('products')
    }, time)

     describe('Products Tests', () => {
        it('Get product correctly', async () => {
            const response = await axios.get(baseUrl + `/api/products/`)
            expect(response.status).toBe(200)
            expect(response.data[0].amount).toBe(1000000)
        })

        it('Delete a product correctly', async () => {
            const response = await axios.delete(baseUrl + `/api/products/hard/?${params}`)
            expect(response.data.deletedCount).toBe(1)
            expect(response.status).toBe(200)
        })
    });
});