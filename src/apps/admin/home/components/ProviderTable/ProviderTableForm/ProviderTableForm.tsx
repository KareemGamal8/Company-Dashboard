import {
  createReactForm,
  dateInput,
  numberInput,
  publishedInput,
  textInput,
} from "@mongez/moonlight";
import { queryString } from "@mongez/react-router";

const singleName = "ProviderTable";

const inputs = [
  textInput("month").required(),
  dateInput("date").required(),
  textInput("paymentMethod").required(),
  numberInput("totalAmount").required(),
  numberInput("totalItems").required(),
  publishedInput(),
];

const ProviderTableForm = createReactForm(reactiveForm => {
  reactiveForm
    .singleName(queryString.get("type", singleName))
    .setInputs(inputs);

  reactiveForm.fullScreen().closeOnEscape(false);
});

export default ProviderTableForm;
