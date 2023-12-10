import request from "supertest";
import "../../../../server/index";
import app from "../../../../server/app";
import { modifiedRecordMock } from "../../mocks/recordsMock";

describe("Given a PATCH /records endpoint", () => {
  describe("When it recives a request with a Record to modify", () => {
    test("Then it should respond with that modified Record ", async () => {
      const expectedStatusCode = 201;
      const requestedPath = `/records/65627f915a1ecd043c5d123a`;

      const response = await request(app)
        .patch(requestedPath)
        .send(modifiedRecordMock)
        .expect(expectedStatusCode);

      const responseStatusCode = response.statusCode;

      expect(responseStatusCode).toBe(201);
    });
  });

  describe("When it recives a request with and invalid id", () => {
    test("Then it should respond with the error message' ", async () => {
      const expectedStatusCode = 500;
      const requestedPath = `/records/123`;

      const response = await request(app)
        .patch(requestedPath)
        .send(undefined)
        .expect(expectedStatusCode);

      const responseStatusCode = response.statusCode;

      expect(responseStatusCode).toBe(500);
    });
  });
});
