import { createReactForm, textInput } from "@mongez/moonlight";
import { getBranchesData } from "apps/admin/branches/services";

const singleName = "branch";

const service = getBranchesData();

const inputs = [
  textInput("name").required().autoFocus(),
  textInput("city"),
  textInput("network"),
];

const BranchTableForm = createReactForm(reactiveForm => {
  reactiveForm
    .service(service as any)
    .singleName(singleName)
    .setInputs(inputs)
    .size("lg");
});

export default BranchTableForm;
