import { type RecordStructure } from "../types";

export interface RecordsRepository {
  getRecords(): Promise<RecordStructure[]>;
}
