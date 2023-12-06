import request from "supertest";
import "../../../../server/index";
import app from "../../../../server/app";
import { newRecordMock } from "../../mocks/recordsMock";

describe("Given a POST /records endpoint", () => {
  describe("When it recives a request with a Record to create", () => {
    test("Then it should respond with that created Record ", async () => {
      const expectedStatusCode = 201;
      const requestedPath = `/records`;

      const response = await request(app)
        .post(requestedPath)
        .send(newRecordMock)
        .expect(expectedStatusCode);

      const responseStatusCode = response.statusCode;

      expect(responseStatusCode).toBe(201);
    });
  });

  describe("When it recives a request with and invalid record", () => {
    test("Then it should respond with the error message' ", async () => {
      const expectedStatusCode = 500;
      const requestedPath = `/records`;

      const response = await request(app)
        .post(requestedPath)
        .send({})
        .expect(expectedStatusCode);

      const responseStatusCode = response.statusCode;

      expect(responseStatusCode).toBe(500);
    });
  });
});
