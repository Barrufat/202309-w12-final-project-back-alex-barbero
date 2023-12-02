import type { Response, Request } from "express";
import type RecordsMongooseRepository from "../../repository/RecordsMongooseRepository";
import { type ByRecordId } from "../../types";

class RecordsController {
  constructor(private readonly recordsRepository: RecordsMongooseRepository) {}

  getRecords = async (_req: Request, res: Response): Promise<void> => {
    const records = await this.recordsRepository.getRecords();

    res.status(200).json({ records });
  };

  deleteRecordById = async (req: ByRecordId, res: Response): Promise<void> => {
    const { recordId } = req.params;

    const record = await this.recordsRepository.deleteRecord(recordId);
    const deleteMessage = `${record.bandName} ${record.albumName} successfully deleted`;

    try {
      res.status(200).json({ message: deleteMessage });
    } catch {
      res.status(400).json({ error: "current thing not found" });
    }
  };
}

export default RecordsController;
