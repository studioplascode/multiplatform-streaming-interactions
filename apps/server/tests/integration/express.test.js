const request = require("supertest");
const app = require("../../src/app");

require("dotenv").config();

// test if express is running
describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
}
);


