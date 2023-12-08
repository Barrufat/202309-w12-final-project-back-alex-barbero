import request from "supertest";
import "../../../../server/index";
import app from "../../../../server/app";
import { recordsMock } from "../../mocks/recordsMock";
import { type RecordStructure } from "../../types";

describe("Given a GET /records endpoint", () => {
  describe("When it recives a request", () => {
    test("Then it should respond with all the records in the database", async () => {
      const expectedStatusCode = 200;
      const requestedPath = "/records";

      const response = await request(app)
        .get(requestedPath)
        .expect(expectedStatusCode);

      const responseBody = response.body as { records: RecordStructure[] };

      const invertedRecordsMock = recordsMock.reverse();

      responseBody.records.forEach((record, recordPosition) => {
        expect(record).toHaveProperty(
          "bandName",
          invertedRecordsMock[recordPosition].bandName,
        );
      });
    });
  });
});
