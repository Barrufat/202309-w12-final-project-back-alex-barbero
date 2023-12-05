import type { NextFunction, Request, Response } from "express";
import { recordsMock } from "../../../mocks/recordsMock";
import type RecordsMongooseRepository from "../../../repository/RecordsMongooseRepository";
import RecordsController from "../RecordsController";

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("Given a RecordsController's getRecords function", () => {
  describe("When it recives a response", () => {
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next: NextFunction = jest.fn();

    const recordsRepository: Pick<RecordsMongooseRepository, "getRecords"> = {
      getRecords: jest.fn().mockReturnValue(recordsMock),
    };

    const recordsController = new RecordsController(
      recordsRepository as RecordsMongooseRepository,
    );

    test("Then it should call the response status method with a 200", async () => {
      const expectedStatusCode = 200;

      await recordsController.getRecords(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the json method with all the records of the database", async () => {
      const expectedRecords = { records: recordsMock };

      await recordsController.getRecords(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedRecords);
    });
  });
});
