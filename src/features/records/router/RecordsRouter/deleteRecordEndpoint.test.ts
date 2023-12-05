import request from "supertest";
import "../../../../server/index";
import app from "../../../../server/app";
import { type RecordStructureWithId } from "../../types";

describe("Given a DELETE /records endpoint", () => {
  describe("When it recives a request with and id", () => {
    test("Then it should respond with the text 'Ejtopa Fui a la orilla der rio y vi ke taba mu chola successfully deleted' ", async () => {
      const expectedGetStatusCode = 200;
      const requestedGetPath = "/records";

      const responseGet = await request(app)
        .get(requestedGetPath)
        .expect(expectedGetStatusCode);

      const responseGetBody = responseGet.body as {
        records: RecordStructureWithId[];
      };

      const expectedStatusCode = 200;
      const requestedPath = `/records/${responseGetBody.records[0]._id}`;

      const response = await request(app)
        .delete(requestedPath)
        .expect(expectedStatusCode);

      const responseBody = response.body as { message: string };

      expect(responseBody.message).toBe(
        `${responseGetBody.records[0].bandName} ${responseGetBody.records[0].albumName} successfully deleted`,
      );
    });
  });

  describe("When it recives a request with and invalid id", () => {
    test("Then it should respond with the error message' ", async () => {
      const expectedStatusCode = 400;
      const requestedPath = `/records/1234`;

      const response = await request(app)
        .delete(requestedPath)
        .expect(expectedStatusCode);

      const responseBody = response.body as { message: string };

      expect(responseBody.message).toBe("Impossible deleting the record");
    });
  });
});