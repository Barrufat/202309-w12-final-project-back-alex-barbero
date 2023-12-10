import { Router } from "express";
import RecordsController from "../../controller/RecordsController/RecordsController.js";
import RecordsMongooseRepository from "../../repository/RecordsMongooseRepository.js";

const recordRouter = Router();

const recordsRepository = new RecordsMongooseRepository();
const recordsController = new RecordsController(recordsRepository);

recordRouter.get("/", recordsController.getRecords);
recordRouter.delete("/:recordId", recordsController.deleteRecordById);
recordRouter.post("/", recordsController.createRecord);
recordRouter.get("/:recordId", recordsController.getRecordById);
recordRouter.patch("/:recordId", recordsController.modifyRecord);

export default recordRouter;
