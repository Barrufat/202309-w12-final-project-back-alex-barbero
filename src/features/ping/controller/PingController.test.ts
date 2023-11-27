import PingController from "./PingController";
import type { Response, Request } from "express";

describe("Given a PingController's getPong method", () => {
  describe("When it recives a response", () => {
    const pingController = new PingController();

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should call the response status with a 200", () => {
      const expectedStatusCode = 200;

      pingController.getPong(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response json with the message '🏓👌'", () => {
      const expectedMessage = { message: "🏓👌" };

      pingController.getPong(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
