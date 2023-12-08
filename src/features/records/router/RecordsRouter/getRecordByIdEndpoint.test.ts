import request from "supertest";
import "../../../../server/index";
import app from "../../../../server/app";
import { type RecordStructureWithIdMongoose } from "../../types";
import { recordsMock } from "../../mocks/recordsMock";

describe("Given a GET /records/:recordId endpoint", () => {
  describe("When it recives a request with and id", () => {
    test("Then it should respond with that record and a status 200 ", async () => {
      const expectedStatusCode = 200;
      const requestedPath = `/records/65627f915a1ecd043c5d123a`;

      const response = await request(app)
        .get(requestedPath)
        .expect(expectedStatusCode);

      const responseBody = (await response.body) as {
        record: RecordStructureWithIdMongoose;
      };

      expect(responseBody.record).toHaveProperty(
        "bandName",
        recordsMock[0].bandName,
      );
    });
  });

  describe("When it recives a request with and invalid id", () => {
    test("Then it should respond with the error message' ", async () => {
      const expectedStatusCode = 500;
      const requestedPath = `/records/1234`;

      const response = await request(app)
        .get(requestedPath)
        .expect(expectedStatusCode);

      const responseBody = response.body as { message: string };

      expect(responseBody.message).toBe("Impossible finding that Record");
    });
  });
});
