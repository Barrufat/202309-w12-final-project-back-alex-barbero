import type { NextFunction, Response } from "express";
import { modifiedRecordMock } from "../../../mocks/recordsMock";
import { type RecordsRepository } from "../../../repository/types";
import { type ModifyRecordRequest } from "../../../types";
import RecordsController from "../RecordsController";

describe("Given a RecordsControllers's method modifyRecord", () => {
  const req: Partial<ModifyRecordRequest> = {
    params: { recordId: "65627f915a1ecd043c5d123a" },
    body: modifiedRecordMock,
  };

  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };

  const next: NextFunction = jest.fn();

  describe("When it receives a response", () => {
    const recordsRepository: Pick<RecordsRepository, "modifyRecord"> = {
      modifyRecord: jest.fn().mockResolvedValue(modifiedRecordMock),
    };

    const recordsController = new RecordsController(
      recordsRepository as RecordsRepository,
    );

    test("Then it should call the method status with a 201", async () => {
      const expectedStatusCode = 201;

      await recordsController.modifyRecord(
        req as ModifyRecordRequest,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with the modified Record", async () => {
      const expectedRecord = modifiedRecordMock;

      await recordsController.modifyRecord(
        req as ModifyRecordRequest,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ record: expectedRecord });
    });
  });
});
