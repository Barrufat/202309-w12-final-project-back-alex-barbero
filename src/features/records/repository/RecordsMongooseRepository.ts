import Record from "../model/Record.js";
import { type RecordStructureWithId, type RecordStructure } from "../types";
import { type RecordsRepository } from "./types";

class RecordsMongooseRepository implements RecordsRepository {
  async getRecords(): Promise<RecordStructure[]> {
    const records = await Record.find();

    return records;
  }

  async deleteRecord(recordId: string): Promise<RecordStructure> {
    const deletedRecord = await Record.findByIdAndDelete(recordId);

    await Record.findByIdAndDelete(recordId);

    return deletedRecord!;
  }

  public async createRecord(
    record: RecordStructure,
  ): Promise<RecordStructureWithId> {
    const createdRecord = await Record.create(record);
    return createdRecord;
  }
}

export default RecordsMongooseRepository;
