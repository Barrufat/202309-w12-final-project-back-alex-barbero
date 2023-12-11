import type { Request, Response, NextFunction } from "express";
import type CustomError from "../../CustomError/CustomError";
import generalError from "../errorMiddleware";

describe("Given a generalError middleWare", () => {
  describe("When it recives a Test Error with no status and name space", () => {
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    const next = jest.fn();

    const customError: Partial<CustomError> = {
      message: "Test error",
      privateMessage: "testPrivateMessage",
    };

    const expectedError: Partial<CustomError> = {
      message: "Test error",
      statusCode: 500,
      nameSpace: "root:errorMiddleWare",
      privateMessage: "testPrivateMessage",
    };
    test("Then it should call json with 'Test error' ", () => {
      generalError(
        customError as CustomError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ message: expectedError.message });
    });

    test("Then it should call status with 500 ", () => {
      generalError(
        customError as CustomError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedError.statusCode);
    });
  });
});
