import type { Request, Response, NextFunction } from "express";
import type CustomError from "../../CustomError/CustomError";
import { notFoundError } from "../errorMiddleware";

describe("Given a notFound error MiddleWare", () => {
  describe("When it recives a next function", () => {
    test("Then it should call the next function with the Custom Error", () => {
      const req = {};
      const res = {};
      const next = jest.fn();

      const customError: Partial<CustomError> = {
        message: "Endpoint not found",
        statusCode: 404,
      };

      notFoundError(req as Request, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalledWith(expect.objectContaining(customError));
    });
  });
});
