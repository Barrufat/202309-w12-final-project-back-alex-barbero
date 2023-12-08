import { type NextFunction, type Request, type Response } from "express";
import type CustomError from "../../../../../server/CustomError/CustomError";
import { recordsMock } from "../../../mocks/recordsMock";
import type RecordsMongooseRepository from "../../../repository/RecordsMongooseRepository";
import {
  type ByIdRecordRequest,
  type ByRecordIdRequest,
  type RecordStructure,
} from "../../../types";
import RecordsController from "../RecordsController";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a recordsControllers's method getRecordById", () => {
  describe("When it receives a response and the Estopa Record Id in a request", () => {
    const req: ByIdRecordRequest = {
      params: jest.fn().mockReturnValue("1"),
    };

    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnValue({
        record: {},
      }),
    };

    const next: NextFunction = jest.fn();

    const recordsRepository: Pick<RecordsMongooseRepository, "getRecordById"> =
      {
        getRecordById: jest.fn().mockReturnValue(recordsMock[0]),
      };

    const recordsController = new RecordsController(
      recordsRepository as RecordsMongooseRepository,
    );

    test("Then it should call the method status with a 200", async () => {
      const expectedStatusCode = 200;

      await recordsController.getRecordById(
        req as unknown as ByRecordIdRequest,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with the message Estopa successfully deleted", async () => {
      const expectedRecord: RecordStructure = recordsMock[0];

      await recordsController.getRecordById(
        req as unknown as ByRecordIdRequest,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({
        record: expectedRecord,
      });
    });
  });

  describe("When it receives a response and an unvalid Id a request", () => {
    const expectedError: Pick<CustomError, "message" | "statusCode"> = {
      message: "Impossible finding that Record",
      statusCode: 500,
    };

    const reqError: Pick<Request, "params"> = {
      params: { recordId: "1234" },
    };
    const resError: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next: NextFunction = jest.fn();

    test("Then it should call the next with a 500 and 'Impossible finding that Record'", async () => {
      const recordsRepository: Pick<RecordsMongooseRepository, "deleteRecord"> =
        {
          deleteRecord: jest.fn().mockRejectedValue("error"),
        };

      const recordsController = new RecordsController(
        recordsRepository as RecordsMongooseRepository,
      );

      await recordsController.getRecordById(
        reqError as Request,
        resError as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
