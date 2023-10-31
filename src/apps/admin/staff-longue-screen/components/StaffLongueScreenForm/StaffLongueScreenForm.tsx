import {
  createReactForm,
  emailInput,
  imageInput,
  publishedInput,
  textInput,
} from "@mongez/moonlight";
import { getStaffLoungeData } from "apps/admin/staff-longue-screen/services";

const singleName = "userLounge";

const service = getStaffLoungeData as any;

const inputs = [
  textInput("name").required().autoFocus(),
  emailInput("email").required(),
  textInput("jobTitle").required().col(12),
  imageInput("image"),
  imageInput("nationalID"),
  publishedInput(),
];

const StaffLongueScreenForm = createReactForm(reactiveForm => {
  reactiveForm
    .service(service)
    .singleName(singleName)
    .setInputs(inputs)
    .size("lg");
});

export default StaffLongueScreenForm;
