import type { Response, Request, NextFunction } from "express";
import CustomError from "../../../../server/CustomError/CustomError.js";
import {
  type ModifyRecordRequest,
  type CreateRecordRequest,
} from "../../types";
import { type RecordsRepository } from "../../repository/types.js";

class RecordsController {
  constructor(private readonly recordsRepository: RecordsRepository) {}

  getRecords = async (
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<void> => {
    const records = await this.recordsRepository.getRecords();

    res.status(200).json({ records });
  };

  deleteRecordById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { recordId } = req.params;

    try {
      const record = await this.recordsRepository.deleteRecord(recordId);

      const deleteMessage = `${record.bandName} ${record.albumName} successfully deleted`;
      res.status(200).json({ message: deleteMessage });
    } catch (error) {
      const customError = new CustomError(
        "Impossible deleting the record",
        400,
        (error as Error).message,
        "root:records:recordsController:deleteRecord",
      );

      next(customError);
    }
  };

  public createRecord = async (
    req: CreateRecordRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const recordData = req.body;

    try {
      const newRecord = await this.recordsRepository.createRecord(recordData);

      res.status(201).json({ record: newRecord });
    } catch (error) {
      const customError = new CustomError(
        "Impossible creating a new Record",
        500,
        (error as Error).message,
        "root:records:recordsController:createRecord",
      );

      next(customError);
    }
  };

  public modifyRecord = async (
    req: ModifyRecordRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const recordData = req.body;
    const { recordId } = req.params;

    try {
      const modifiedRecord = await this.recordsRepository.modifyRecord(
        recordId,
        recordData,
      );
      res.status(201).json({ record: modifiedRecord });
    } catch (error) {
      const customError = new CustomError(
        "Impossible creating a new Record",
        500,
        (error as Error).message,
        "root:records:recordsController:modifyRecord",
      );

      next(customError);
    }
  };

  public getRecordById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { recordId } = req.params;

    try {
      const currentRecord =
        await this.recordsRepository.getRecordById(recordId);

      res.status(200).json({ record: currentRecord });
    } catch (error) {
      const customError = new CustomError(
        "Impossible finding that Record",
        500,
        (error as Error).message,
        "root:records:recordsController:getRecordById",
      );

      next(customError);
    }
  };
}

export default RecordsController;
