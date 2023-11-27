import request from "supertest";
import "../../../server/index";
import app from "../../../server/app";

describe("Given a GET / endpoint", () => {
  describe("When it recives a request", () => {
    test("Then it should respond with 200 and a message 🏓👌", async () => {
      const expectedStatusCode = 200;
      const expectedMessage = "🏓👌";
      const requestedPath = "/";

      const response = await request(app)
        .get(requestedPath)
        .expect(expectedStatusCode);

      expect(response.body).toHaveProperty("message", expectedMessage);
    });
  });
});
