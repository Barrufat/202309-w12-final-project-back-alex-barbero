import type { NextFunction, Response } from "express";
import { type CreateRecordRequest } from "../../../types";
import { type RecordsRepository } from "../../../repository/types";
import RecordsController from "../RecordsController";
import { newRecordMock } from "../../../mocks/recordsMock";

describe("Given a RecordsControllers's method createRecord", () => {
  const req: Pick<CreateRecordRequest, "body"> = {
    body: newRecordMock,
  };

  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };

  const next: NextFunction = jest.fn();

  describe("When it receives a request with a a new record data and a response", () => {
    const recordsRepository: Pick<RecordsRepository, "createRecord"> = {
      createRecord: jest.fn().mockResolvedValue(newRecordMock),
    };

    const recordsController = new RecordsController(
      recordsRepository as RecordsRepository,
    );

    test("Then it should call the response method status with a 201", async () => {
      const expectedStatusCode = 201;

      await recordsController.createRecord(
        req as CreateRecordRequest,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response method json with the new Record", async () => {
      const expectedRecord = newRecordMock;

      await recordsController.createRecord(
        req as CreateRecordRequest,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ record: expectedRecord });
    });
  });
});
