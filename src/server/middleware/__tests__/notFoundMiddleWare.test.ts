import type { Request, Response, NextFunction } from "express";
import CustomError from "../../CustomError/CustomError";
import { notFoundError } from "../errorMiddleware";

describe("Given a notFound error MiddleWare", () => {
  describe("When it recives a next function", () => {
    test("Then it should call the next function with the Custom Error", () => {
      const req = {};
      const res = {};
      const next: NextFunction = jest.fn();

      const customError = new CustomError(
        "Endpoint not found",
        404,
        "errorMiddlewWare:notFound",
        "testPrivateMessage",
      );

      notFoundError(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(customError);
    });
  });
});
