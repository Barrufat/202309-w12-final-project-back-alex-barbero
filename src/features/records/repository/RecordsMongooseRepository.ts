import Record from "../model/Record.js";
import { type RecordStructureWithId, type RecordStructure } from "../types";
import { type RecordsRepository } from "./types";

class RecordsMongooseRepository implements RecordsRepository {
  async getRecords(): Promise<RecordStructure[]> {
    const records = await Record.find().sort({ _id: -1 }).limit(10);

    return records;
  }

  async deleteRecord(recordId: string): Promise<RecordStructure> {
    const deletedRecord = await Record.findByIdAndDelete(recordId);
    return deletedRecord!;
  }

  async createRecord(record: RecordStructure): Promise<RecordStructureWithId> {
    const createdRecord = await Record.create(record);
    return createdRecord;
  }

  async getRecordById(recordId: string): Promise<RecordStructure> {
    const record = await Record.findById(recordId);
    return record!;
  }
}

export default RecordsMongooseRepository;
