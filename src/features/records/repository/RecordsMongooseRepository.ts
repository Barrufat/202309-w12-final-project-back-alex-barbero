import Record from "../model/Record.js";
import { type RecordStructureWithId, type RecordStructure } from "../types";
import { type RecordsRepository } from "./types";

class RecordsMongooseRepository implements RecordsRepository {
  async getRecords(): Promise<RecordStructure[]> {
    const records = await Record.find().limit(10).sort({ _id: -1 });

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

  async modifyRecord(
    recordId: string,
    record: RecordStructure,
  ): Promise<RecordStructureWithId> {
    const modifiedRecord = await Record.findOneAndUpdate(
      { _id: recordId },
      record,
      {
        new: true,
      },
    );

    return modifiedRecord!;
  }

  async getRecordById(recordId: string): Promise<RecordStructure> {
    const record = await Record.findById(recordId);
    return record!;
  }
}

export default RecordsMongooseRepository;
