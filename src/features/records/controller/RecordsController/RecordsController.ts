import type { Response, Request, NextFunction } from "express";
import type RecordsMongooseRepository from "../../repository/RecordsMongooseRepository";
import CustomError from "../../../../server/CustomError/CustomError";

class RecordsController {
  constructor(private readonly recordsRepository: RecordsMongooseRepository) {}

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
        "records:recordsController:deleteRecord",
      );

      next(customError);
    }
  };
}

export default RecordsController;
