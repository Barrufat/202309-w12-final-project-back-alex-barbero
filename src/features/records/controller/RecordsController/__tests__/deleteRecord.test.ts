import type { NextFunction, Response, Request } from "express";
import { recordsMock } from "../../../mocks/recordsMock";
import type RecordsMongooseRepository from "../../../repository/RecordsMongooseRepository";
import type { RecordStructure, ByRecordIdRequest } from "../../../types";
import RecordsController from "../RecordsController";
import type CustomError from "../../../../../server/CustomError/CustomError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a recordsControllers's method deleteRecord", () => {
  describe("When it receives a response and the Estopa Record Id in a request", () => {
    const req: Partial<ByRecordIdRequest> = {
      params: { recordId: "1" },
    };

    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnValue({
        message:
          "Ejtopa Fui alaorilla del rio y mi ketabah mu chola successfully deleted",
      }),
    };

    const next: NextFunction = jest.fn();

    const recordsRepository: Pick<RecordsMongooseRepository, "deleteRecord"> = {
      deleteRecord: jest.fn().mockReturnValue(recordsMock[0]),
    };

    const recordsController = new RecordsController(
      recordsRepository as RecordsMongooseRepository,
    );

    test("Then it should call the method status with a 200", async () => {
      const expectedStatusCode = 200;

      await recordsController.deleteRecordById(
        req as unknown as ByRecordIdRequest,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with the message Estopa successfully deleted", async () => {
      const expectedRecord: RecordStructure = recordsMock[0];

      await recordsController.deleteRecordById(
        req as ByRecordIdRequest,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({
        message: `${expectedRecord.bandName} ${expectedRecord.albumName} successfully deleted`,
      });
    });
  });

  describe("When it receives a response and an unvalid Id a request", () => {
    const expectedError: Pick<CustomError, "message" | "statusCode"> = {
      message: "Impossible deleting the record",
      statusCode: 400,
    };

    const reqError: Pick<Request, "params"> = {
      params: { recordId: "1234" },
    };
    const resError: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next: NextFunction = jest.fn();

    test("Then it should call the next with a 400 and 'Impossible deleting the record'", async () => {
      const recordsRepository: Pick<RecordsMongooseRepository, "deleteRecord"> =
        {
          deleteRecord: jest.fn().mockRejectedValue("error"),
        };

      const recordsController = new RecordsController(
        recordsRepository as RecordsMongooseRepository,
      );

      await recordsController.deleteRecordById(
        reqError as Request,
        resError as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
