import { type RecordStructureWithId, type RecordStructure } from "../types";

export interface RecordsRepository {
  getRecords: () => Promise<RecordStructure[]>;
  deleteRecord: (recordId: string) => Promise<RecordStructure>;
  createRecord: (record: RecordStructure) => Promise<RecordStructureWithId>;
  getRecordById: (recordId: string) => Promise<RecordStructure>;
  modifyRecord: (
    recordId: string,
    record: RecordStructure,
  ) => Promise<RecordStructure>;
}
