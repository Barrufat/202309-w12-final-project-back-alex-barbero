import { Record } from "../model/Record.js";
import { type RecordStructure } from "../types";
import { type RecordsRepository } from "./types";

class RecordsMongooseRepository implements RecordsRepository {
  async getRecords(): Promise<RecordStructure[]> {
    const records = await Record.find().limit(10);

    return records;
  }
}

export default RecordsMongooseRepository;
