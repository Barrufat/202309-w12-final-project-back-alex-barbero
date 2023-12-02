import type { Response } from "express";
import { recordsMock } from "../../../mocks/recordsMock";
import type RecordsMongooseRepository from "../../../repository/RecordsMongooseRepository";
import {
  type RecordStructure,
  type DeleteRecordRequest,
  type ByRecordId,
} from "../../../types";
import RecordsController from "../RecordsController";

describe("Given a recordsControllers's method deleteRecord", () => {
  const req: DeleteRecordRequest = {
    params: jest.fn().mockReturnValue("1"),
  };

  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnValue({
      message:
        "Ejtopa Fui alaorilla del rio y mi ketabah mu chola successfully deleted",
    }),
  };

  describe("When it receives a response and a record Id in a request", () => {
    const recordsRepository: Pick<RecordsMongooseRepository, "deleteRecord"> = {
      deleteRecord: jest.fn().mockReturnValue(recordsMock[0]),
    };

    const recordsController = new RecordsController(
      recordsRepository as RecordsMongooseRepository,
    );

    test("Then it should call the method status with a 200", async () => {
      const expectedStatusCode = 200;

      await recordsController.deleteRecordById(
        req as unknown as ByRecordId,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with the deleted record", async () => {
      const expectedRecord: RecordStructure = recordsMock[0];

      await recordsController.deleteRecordById(
        req as unknown as ByRecordId,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith({
        message: `${expectedRecord.bandName} ${expectedRecord.albumName} successfully deleted`,
      });
    });
  });
});
