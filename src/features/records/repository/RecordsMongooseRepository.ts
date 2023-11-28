import { Record } from "../model/Record";
import { type RecordStructure } from "../types";
import { type RecordsRepository } from "./types";

class RecordsMongooseRepository implements RecordsRepository {
  async getRecords(): Promise<RecordStructure[]> {
    const records = await Record.find();

    return records;
  }
}

export default RecordsMongooseRepository;
