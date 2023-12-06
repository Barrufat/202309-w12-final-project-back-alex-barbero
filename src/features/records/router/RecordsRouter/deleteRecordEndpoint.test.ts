import request from "supertest";
import "../../../../server/index";
import app from "../../../../server/app";
import { recordsMock } from "../../mocks/recordsMock";

describe("Given a DELETE /records endpoint", () => {
  describe("When it recives a request with and id", () => {
    test("Then it should respond with the text 'Ejtopa Fui a la orilla der rio y vi ke taba mu chola successfully deleted' ", async () => {
      const expectedStatusCode = 200;
      const requestedPath = `/records/65627f915a1ecd043c5d123a`;

      const response = await request(app)
        .delete(requestedPath)
        .expect(expectedStatusCode);

      const responseBody = (await response.body) as { message: string };

      expect(responseBody.message).toBe(
        `${recordsMock[0].bandName} ${recordsMock[0].albumName} successfully deleted`,
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
