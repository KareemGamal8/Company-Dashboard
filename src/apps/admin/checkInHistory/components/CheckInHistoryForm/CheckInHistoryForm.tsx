import { createReactiveForm, numberInput, textInput } from "@mongez/moonlight";
import checkInHistoryService from "../../services/check-in-history";

const singleName = "history";

const service = checkInHistoryService;

const inputs = [
  textInput("name").required().col(12).autoFocus(),
  numberInput("check_ins_count").required().col(12),
];

const CheckInHistoryForm = createReactiveForm(reactiveForm => {
  reactiveForm.setInputs(inputs).singleName(singleName).service(service);
});

export default CheckInHistoryForm;
