import request from "supertest";
import app from "../../app";
import "../../../server/index.js";

describe("Given a GET /testpath endpoint", () => {
  describe("When it recives a request", () => {
    test("Then it should respond with 404 and a message 'Endpoint not found'", async () => {
      const expectedStatusCode = 404;
      const expectedMessage = "Endpoint not found";
      const requestedPath = "/testpath";

      const response = await request(app)
        .get(requestedPath)
        .expect(expectedStatusCode);

      expect(response.body).toHaveProperty("message", expectedMessage);
    });
  });
});
