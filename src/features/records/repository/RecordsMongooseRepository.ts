import { Record } from "../model/Record.js";
import { type RecordStructure } from "../types";
import { type RecordsRepository } from "./types";

class RecordsMongooseRepository implements RecordsRepository {
  async getRecords(): Promise<RecordStructure[]> {
    const records = await Record.find();

    return records;
  }

  async deleteRecord(recordId: string): Promise<RecordStructure> {
    const deletedRecord = await Record.findByIdAndDelete(recordId);

    if (!deletedRecord) {
      throw new Error("Record not found!");
    }

    return deletedRecord;
  }
}

export default RecordsMongooseRepository;
