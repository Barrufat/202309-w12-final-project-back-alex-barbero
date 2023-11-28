import type { Response, Request } from "express";
import type RecordsMongooseRepository from "../../repository/RecordsMongooseRepository";

class RecordsController {
  constructor(private readonly recordsRepository: RecordsMongooseRepository) {}

  getRecords = async (_req: Request, res: Response): Promise<void> => {
    const records = await this.recordsRepository.getRecords();

    res.status(200).json({ records });
  };
}

export default RecordsController;
